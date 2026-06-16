-- ============================================================================
-- First-party page-view analytics (free, anonymous, GDPR-friendly)
-- ----------------------------------------------------------------------------
-- No cookies, no PII — just path + referrer + a random session id stored in
-- localStorage. Data lives in your own Supabase DB. Anyone can INSERT a view;
-- only admins can read/delete (mirrors the existing has_role() RLS pattern).
-- Run in Supabase Dashboard → SQL Editor (or via the CLI as a migration).
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text NOT NULL,
  referrer text,
  session_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS page_views_created_at_idx ON public.page_views (created_at DESC);
CREATE INDEX IF NOT EXISTS page_views_path_idx ON public.page_views (path);

ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can record a page view" ON public.page_views;
CREATE POLICY "Anyone can record a page view"
  ON public.page_views FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view page views" ON public.page_views;
CREATE POLICY "Admins can view page views"
  ON public.page_views FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can delete page views" ON public.page_views;
CREATE POLICY "Admins can delete page views"
  ON public.page_views FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'::app_role));
