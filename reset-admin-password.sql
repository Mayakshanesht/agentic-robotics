-- ============================================================================
-- CloudBee Robotics — Set the admin password directly (no email needed)
-- ============================================================================
-- WHY YOU NEED THIS
--   Supabase's built-in email service is rate-limited and frequently lands in
--   spam, so the "reset password" mail is often sent but never received. The
--   reliable fix is to set the password directly in the auth table below.
--   (Permanent fix: configure custom SMTP in Supabase → Auth → SMTP Settings,
--    e.g. Resend/SendGrid, and add your site URL to Auth → URL Configuration.)
--
-- HOW TO RUN
--   Supabase Dashboard → SQL Editor → New query → paste this → Run.
--   Then log in at /admin-login with the email + password below.
-- ============================================================================

DO $$
DECLARE
  v_email    text := 'mayurwaghchoure1995@gmail.com';
  v_password text := 'Sarah@1995';
  v_user_id  uuid;
BEGIN
  CREATE EXTENSION IF NOT EXISTS pgcrypto;

  SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;

  -- If the user doesn't exist yet, create it (confirmed) in auth.users.
  IF v_user_id IS NULL THEN
    v_user_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, aud, role, email,
      encrypted_password, email_confirmed_at,
      raw_app_meta_data, raw_user_meta_data,
      created_at, updated_at
    ) VALUES (
      v_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', v_email,
      crypt(v_password, gen_salt('bf')), now(),
      '{"provider":"email","providers":["email"]}'::jsonb, '{}'::jsonb,
      now(), now()
    );
  ELSE
    -- Otherwise just (re)set the password and confirm the account.
    UPDATE auth.users
    SET encrypted_password = crypt(v_password, gen_salt('bf')),
        email_confirmed_at = COALESCE(email_confirmed_at, now()),
        updated_at = now()
    WHERE id = v_user_id;
  END IF;

  -- Ensure the admin role.
  INSERT INTO public.user_roles (user_id, role)
  VALUES (v_user_id, 'admin'::app_role)
  ON CONFLICT (user_id, role) DO NOTHING;

  RAISE NOTICE 'Admin ready: % (password set, admin role ensured).', v_email;
END $$;

-- Verify
SELECT u.email,
       (u.email_confirmed_at IS NOT NULL) AS confirmed,
       ur.role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id
WHERE u.email = 'mayurwaghchoure1995@gmail.com';
