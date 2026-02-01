-- Create admin user and assign role
-- This migration creates the admin user with email: mayurwaghchoure1995@gmail.com

-- First, create the auth user (this will need to be done via Supabase Dashboard or CLI)
-- Then assign admin role to the user

-- Insert admin role for the user (replace USER_ID with actual auth user ID)
-- This will be executed after the user is created in auth.users

-- Note: The actual user creation in auth.users needs to be done via:
-- 1. Supabase Dashboard Authentication section, or
-- 2. Supabase CLI: supabase auth user create mayurwaghchoure1995@gmail.com --password 'Sarah@1995'

-- After creating the user, get their UUID and run:
INSERT INTO public.user_roles (user_id, role)
VALUES (
  'USER_ID_HERE', -- Replace with actual UUID from auth.users
  'admin'::app_role
);

-- Alternative: Create a function to handle admin setup
CREATE OR REPLACE FUNCTION public.setup_admin_user()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_user_id UUID;
BEGIN
  -- Find user by email (this requires the user to exist in auth.users)
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = 'mayurwaghchoure1995@gmail.com';
  
  -- If user exists, assign admin role
  IF admin_user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (admin_user_id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.setup_admin_user() TO authenticated;
