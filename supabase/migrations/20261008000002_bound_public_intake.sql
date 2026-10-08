-- Enforce field limits in the database too, since browser validation is bypassable.
-- NOT VALID retains existing records while enforcing constraints on new writes.
ALTER TABLE public.contact_inquiries ADD CONSTRAINT contact_public_field_limits CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(coalesce(company, '')) <= 150
  AND interest IN ('Pilot Program', 'Partnership', 'Investment', 'Research Collaboration', 'Other')
  AND char_length(btrim(message)) BETWEEN 10 AND 2000
) NOT VALID;

ALTER TABLE public.job_applications ADD CONSTRAINT applications_public_field_limits CHECK (
  char_length(btrim(full_name)) BETWEEN 2 AND 120
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(role) BETWEEN 1 AND 200
  AND char_length(coalesce(location, '')) <= 120
  AND char_length(coalesce(linkedin, '')) <= 255
  AND char_length(coalesce(portfolio, '')) <= 255
  AND char_length(btrim(cover_letter)) BETWEEN 10 AND 4000
) NOT VALID;

ALTER TABLE public.beta_access_requests ADD CONSTRAINT access_public_field_limits CHECK (
  char_length(btrim(full_name)) BETWEEN 2 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND char_length(coalesce(company, '')) <= 100
  AND char_length(coalesce(role, '')) <= 100
  AND char_length(coalesce(use_case, '')) <= 1000
) NOT VALID;

ALTER TABLE public.page_views ADD CONSTRAINT page_views_public_field_limits CHECK (
  char_length(path) BETWEEN 1 AND 512
  AND left(path, 1) = '/'
  AND char_length(coalesce(referrer, '')) <= 255
  AND char_length(coalesce(session_id, '')) <= 100
) NOT VALID;
