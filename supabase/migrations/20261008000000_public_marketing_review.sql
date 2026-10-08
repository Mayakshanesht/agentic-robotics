-- Existing articles stay private until an admin reviews them for public marketing.
ALTER TABLE public.blog_posts
  ADD COLUMN public_marketing_approved BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE public.blog_posts ALTER COLUMN published SET DEFAULT false;

DROP POLICY "Anyone can view published blog posts" ON public.blog_posts;
CREATE POLICY "Anyone can view reviewed marketing posts"
  ON public.blog_posts FOR SELECT
  USING (
    (published = true AND public_marketing_approved = true)
    OR public.has_role(auth.uid(), 'admin'::public.app_role)
  );

COMMENT ON COLUMN public.blog_posts.public_marketing_approved IS
  'Admin review confirms public marketing copy and imagery contain no proprietary methods or confidential customer information.';
