-- ============================================================================
-- CloudBee Robotics — Directly reset the admin password (no email needed)
-- ============================================================================
-- WHEN TO USE THIS
--   • The "reset password" email never arrives, OR
--   • The old admin password no longer works.
--
-- This sets the password directly in Supabase's auth table and guarantees the
-- account is confirmed + has the admin role. Run it in:
--   Supabase Dashboard → SQL Editor → New query → paste → Run.
--
-- 1) Edit the two variables below (email + the NEW password you want).
-- 2) Run the whole script.
-- 3) Log in at /admin-login with that email + new password.
-- ============================================================================

DO $$
DECLARE
  v_email    text := 'mayurwaghchoure1995@gmail.com';   -- <-- your admin email
  v_password text := 'ChangeMe_Strong#2026';            -- <-- your NEW password (min 8 chars)
  v_user_id  uuid;
BEGIN
  -- pgcrypto provides crypt()/gen_salt() for bcrypt hashing
  CREATE EXTENSION IF NOT EXISTS pgcrypto;

  SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;

  IF v_user_id IS NULL THEN
    RAISE NOTICE 'No user with email %. Create it first: Dashboard → Authentication → Users → Add user (auto-confirm).', v_email;
    RETURN;
  END IF;

  -- Set the new password (bcrypt) and make sure the account is confirmed.
  UPDATE auth.users
  SET
    encrypted_password = crypt(v_password, gen_salt('bf')),
    email_confirmed_at = COALESCE(email_confirmed_at, now()),
    updated_at         = now()
  WHERE id = v_user_id;

  -- Ensure the admin role exists for this user.
  INSERT INTO public.user_roles (user_id, role)
  VALUES (v_user_id, 'admin'::app_role)
  ON CONFLICT (user_id, role) DO NOTHING;

  RAISE NOTICE 'Password reset + admin role ensured for % (user_id=%).', v_email, v_user_id;
END $$;

-- Verify
SELECT u.email,
       (u.email_confirmed_at IS NOT NULL) AS confirmed,
       ur.role
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id
WHERE u.email = 'mayurwaghchoure1995@gmail.com';
