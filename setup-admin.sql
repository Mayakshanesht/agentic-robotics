-- Admin User Setup Script
-- Run this in Supabase SQL Editor after creating the auth user

-- Step 1: Create admin user (run this in Supabase Dashboard Authentication section)
-- Email: mayurwaghchoure1995@gmail.com
-- Password: Sarah@1995

-- Step 2: Get the user ID and assign admin role
-- Run this query after creating the user:

-- Find the user ID
SELECT id, email, created_at 
FROM auth.users 
WHERE email = 'mayurwaghchoure1995@gmail.com';

-- Step 3: Replace the USER_ID below with the actual UUID from the query above
-- Then run this to assign admin role:

INSERT INTO public.user_roles (user_id, role)
VALUES (
  'PASTE_USER_ID_HERE', -- Replace with actual UUID from the query above
  'admin'::app_role
)
ON CONFLICT (user_id, role) DO NOTHING;

-- Verify admin role assignment
SELECT 
  u.email,
  ur.role,
  u.created_at
FROM auth.users u
JOIN public.user_roles ur ON u.id = ur.user_id
WHERE u.email = 'mayurwaghchoure1995@gmail.com';

-- Alternative: One-time setup function
CREATE OR REPLACE FUNCTION public.create_admin_if_not_exists()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_user_id UUID;
  result_text TEXT;
BEGIN
  -- Find user by email
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = 'mayurwaghchoure1995@gmail.com';
  
  IF admin_user_id IS NOT NULL THEN
    -- Assign admin role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (admin_user_id, 'admin'::app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
    
    result_text := 'Admin role assigned to mayurwaghchoure1995@gmail.com';
  ELSE
    result_text := 'User not found. Please create the user first in Supabase Dashboard.';
  END IF;
  
  RETURN result_text;
END;
$$;

-- Run this to setup admin
SELECT public.create_admin_if_not_exists();
