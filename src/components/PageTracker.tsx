import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

/**
 * First-party page counts without cookies or persistent visitor identifiers.
 * Logs each public route change to the Supabase `page_views` table.
 * Fails silently if the table doesn't exist yet, so it never breaks the site.
 * Admin routes are not tracked.
 */
export function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      // Retire the identifier saved by older versions of the site.
      localStorage.removeItem("cb_sid");
    } catch {
      // Browsers may disable local storage.
    }
    const path = location.pathname;
    if (path.startsWith("/admin") || path.startsWith("/reset-password") || path.startsWith("/careers/")) return;

    let referrer: string | null = null;
    try {
      if (document.referrer && new URL(document.referrer).host !== window.location.host) {
        // Keep only the referring origin; URLs may carry private search/query data.
        referrer = new URL(document.referrer).origin;
      }
    } catch {
      referrer = null;
    }

    // fire-and-forget; swallow errors (e.g. before the migration is applied)
    (supabase as unknown as { from: (t: string) => { insert: (v: unknown) => Promise<unknown> } })
      .from("page_views")
      .insert({ path: path.slice(0, 512), referrer })
      .then(
        () => {},
        () => {}
      );
  }, [location.pathname]);

  return null;
}
