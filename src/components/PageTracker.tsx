import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

/**
 * First-party, cookie-free page-view tracker. Logs each route change to the
 * Supabase `page_views` table with an anonymous session id (localStorage).
 * Fails silently if the table doesn't exist yet, so it never breaks the site.
 * Admin routes are not tracked.
 */
function getSessionId(): string {
  try {
    const key = "cb_sid";
    let v = localStorage.getItem(key);
    if (!v) {
      v = (crypto.randomUUID?.() ?? String(Math.random()).slice(2)) + Date.now().toString(36);
      localStorage.setItem(key, v);
    }
    return v;
  } catch {
    return "anon";
  }
}

export function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/admin")) return;

    let referrer: string | null = null;
    try {
      if (document.referrer && new URL(document.referrer).host !== window.location.host) {
        referrer = document.referrer;
      }
    } catch {
      referrer = null;
    }

    // fire-and-forget; swallow errors (e.g. before the migration is applied)
    (supabase as unknown as { from: (t: string) => { insert: (v: unknown) => Promise<unknown> } })
      .from("page_views")
      .insert({ path, referrer, session_id: getSessionId() })
      .then(
        () => {},
        () => {}
      );
  }, [location.pathname]);

  return null;
}
