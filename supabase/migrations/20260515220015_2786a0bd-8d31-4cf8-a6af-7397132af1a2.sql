
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  interest TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiry"
ON public.contact_inquiries FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view contact inquiries"
ON public.contact_inquiries FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete contact inquiries"
ON public.contact_inquiries FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT,
  linkedin TEXT,
  portfolio TEXT,
  cover_letter TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job application"
ON public.job_applications FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view job applications"
ON public.job_applications FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete job applications"
ON public.job_applications FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));
