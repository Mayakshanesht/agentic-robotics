-- Bound repeated submissions for the same sender across all public forms.
CREATE OR REPLACE FUNCTION public.limit_repeat_intake()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
DECLARE
  sender text := lower(btrim(NEW.email));
  recent_count bigint;
BEGIN
  -- Ignore client timestamps and serialise concurrent submissions by sender.
  NEW.created_at := now();
  PERFORM pg_advisory_xact_lock(hashtextextended('cloudbee-intake:' || sender, 0));
  SELECT
    (SELECT count(*) FROM public.contact_inquiries WHERE lower(btrim(email)) = sender AND created_at > now() - interval '15 minutes')
    + (SELECT count(*) FROM public.job_applications WHERE lower(btrim(email)) = sender AND created_at > now() - interval '15 minutes')
    + (SELECT count(*) FROM public.beta_access_requests WHERE lower(btrim(email)) = sender AND created_at > now() - interval '15 minutes')
    INTO recent_count;
  IF recent_count >= 5 THEN
    RAISE EXCEPTION 'Too many submissions. Please try again later.' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.limit_repeat_intake() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER contact_repeat_limit BEFORE INSERT ON public.contact_inquiries
  FOR EACH ROW EXECUTE FUNCTION public.limit_repeat_intake();
CREATE TRIGGER application_repeat_limit BEFORE INSERT ON public.job_applications
  FOR EACH ROW EXECUTE FUNCTION public.limit_repeat_intake();
CREATE TRIGGER access_repeat_limit BEFORE INSERT ON public.beta_access_requests
  FOR EACH ROW EXECUTE FUNCTION public.limit_repeat_intake();

CREATE INDEX contact_sender_created_idx ON public.contact_inquiries (lower(btrim(email)), created_at);
CREATE INDEX application_sender_created_idx ON public.job_applications (lower(btrim(email)), created_at);
CREATE INDEX access_sender_created_idx ON public.beta_access_requests (lower(btrim(email)), created_at);
