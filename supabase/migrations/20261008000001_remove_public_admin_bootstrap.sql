-- These legacy SECURITY DEFINER helpers were available to public API callers.
-- Admin role provisioning belongs to a private, owner-controlled DB session.
DROP FUNCTION IF EXISTS public.setup_admin_user();
DROP FUNCTION IF EXISTS public.create_admin_if_not_exists();

REVOKE ALL ON public.user_roles FROM anon;
GRANT SELECT ON public.user_roles TO authenticated;
