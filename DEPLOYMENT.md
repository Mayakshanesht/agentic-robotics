# Deployment and public repository preparation

## Before public publication

Historical commits in the original development repository included operational
admin passwords. Removing them from the working tree does
not remove those earlier commits. Rotate the exposed admin password and revoke
old sessions in the live Supabase project. Publish the clean source export as a
new repository, or separately review a history-rewrite plan for the existing
remote. Do not publish the original history or the external backup directory.

The source export intentionally contains no local environment files. Set the
public Supabase project configuration in Vercel. Keep provider keys and webhook
secrets only in Supabase Edge secrets and private webhook configuration.

## Vercel

1. Import the clean repository. Keep framework `vite`, build command
   `npm run check:public`, and output directory `dist` from `vercel.json`.
2. Configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in Vercel.
   These values are browser-visible; use a publishable/anon key only.
3. Deploy and check public routes, the careers deadline, social preview image,
   contact forms and the configured security response headers.
4. The original pages and original demonstration videos are restored at the
   owner's request. Check that media loads from its original URL and that the
   careers deadline is 30 October 2026. Existing search caches, old deploy URLs
   and repository forks are separate from the current publication tree.

The build fails if unregistered media, private setup files or secret-shaped
tokens reappear in the publication tree. The original website content is
preserved, including its technical descriptions. Media files must match their
registered SHA-256 fingerprints.
Publish only `dist`; do not serve the repository root.

Vercel configuration reference:
https://vercel.com/docs/project-configuration/vercel-json

## Supabase database and authentication

Apply the three `20261008` security migrations in order using your normal migration
workflow. For an existing linked project, review the planned changes before
running `supabase db push`:

- Remove the legacy public admin bootstrap functions and anonymous role-table
  access. Existing legitimate admin roles remain in place.
- Enforce form and analytics field limits in the database.
- Limit repeated form submissions by sender and use server timestamps.

Create/administer accounts through Supabase Auth. Grant an admin role only from
an owner-controlled database session; no public migration provisions a user,
password or hardcoded identity. Check deployed RLS policies: visitors must not
be able to read contact inquiries, applications, early-access requests or
analytics. Disable public account signups if they are unnecessary for this site.

The sender limit reduces repeat submissions; it is not full bot protection.
For a high-volume campaign, put CAPTCHA/IP rate limiting on a server intake
endpoint and revoke direct anonymous inserts after moving the forms to it.

## Dependency scope

The production dependency audit reports zero known vulnerabilities after the
router update and removal of unused 3D libraries. Development-only advisories
remain in the Tailwind 3 parser stack and Vite 5 development tools. These tools
build trusted source and are not served by static Vercel hosting. The local dev
server binds to localhost, disables cross-origin requests and denies environment
and Git files. Recheck audits regularly; toolchain upgrades need a separate
compatibility review.

## Protected notifications

In this implementation, the website stores submissions in Supabase and browser
callers cannot invoke mail sending. After the following deployment steps,
authenticated database webhooks send notifications only to the business mailbox.
Automatic messages to unverified visitor addresses are not sent.

1. Verify the sender domain in Resend.
2. Configure `RESEND_API_KEY` and a random `FORM_NOTIFICATION_SECRET` of at
   least 32 characters in Supabase Edge secrets. Never commit their values or
   place them in a `VITE_` variable. Use a private secrets file if using
   `supabase secrets set --env-file`.
3. Deploy `send-contact-email`, `send-application-email` and `ask-cloudbee`.
   The notification functions use `verify_jwt = false` because the handlers
   validate the server-only webhook secret before parsing any record.
4. Configure database webhooks for INSERT events:

| Table | Edge function |
| --- | --- |
| `contact_inquiries` | `send-contact-email` |
| `beta_access_requests` | `send-contact-email` |
| `job_applications` | `send-application-email` |

Use POST with `Content-Type: application/json` and header
`x-form-notification-secret` containing the same private secret. Use the
standard database webhook payload (`type`, `schema`, `table`, `record`). Keep
webhook configuration private; database dumps of trigger definitions may
include header secrets.

Forms continue storing records before notification setup is completed, but
inbox notifications require these webhook and secret settings. Verify delivery
with your own deliberate test submission after deployment.

Supabase references:
https://supabase.com/docs/guides/database/webhooks
https://supabase.com/docs/guides/functions/auth
