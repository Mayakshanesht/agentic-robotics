-- Complete Admin Setup for CloudBee Robotics
-- Run this entire script in Supabase SQL Editor

-- =====================================================
-- STEP 1: Create the user (if not exists)
-- =====================================================

-- First, check if user exists
DO $$
DECLARE
    user_exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM auth.users 
        WHERE email = 'mayurwaghchoure1995@gmail.com'
    ) INTO user_exists;
    
    IF NOT user_exists THEN
        RAISE NOTICE 'User does not exist. Please create user manually in Supabase Dashboard:';
        RAISE NOTICE '1. Go to Authentication → Users';
        RAISE NOTICE '2. Click "Add user"';
        RAISE NOTICE '3. Email: mayurwaghchoure1995@gmail.com';
        RAISE NOTICE '4. Password: Sarah@1995';
        RAISE NOTICE '5. Run this script again after creating the user';
    ELSE
        RAISE NOTICE 'User found. Proceeding with admin setup...';
    END IF;
END $$;

-- =====================================================
-- STEP 2: Assign Admin Role
-- =====================================================

-- Insert admin role for the user
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users 
WHERE email = 'mayurwaghchoure1995@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;

-- =====================================================
-- STEP 3: Verify Setup
-- =====================================================

-- Check user and admin status
SELECT 
    u.id,
    u.email,
    u.created_at,
    ur.role,
    CASE 
        WHEN ur.role = 'admin' THEN '✅ ADMIN ACCESS GRANTED'
        WHEN ur.role IS NULL THEN '❌ NO ROLE ASSIGNED'
        ELSE 'ℹ️ Role: ' || ur.role
    END as admin_status
FROM auth.users u
LEFT JOIN public.user_roles ur ON u.id = ur.user_id
WHERE u.email = 'mayurwaghchoure1995@gmail.com';

-- =====================================================
-- STEP 4: Test Admin Function
-- =====================================================

-- Test the admin role checking function
SELECT 
    email,
    public.has_role(id, 'admin') as has_admin_access
FROM auth.users 
WHERE email = 'mayurwaghchoure1995@gmail.com';

-- =====================================================
-- STEP 5: Show All Admin Users
-- =====================================================

RAISE NOTICE '=== ALL ADMIN USERS ===';
SELECT 
    u.email,
    ur.role,
    u.created_at
FROM auth.users u
JOIN public.user_roles ur ON u.id = ur.user_id
WHERE ur.role = 'admin';

RAISE NOTICE '=== SETUP COMPLETE ===';
RAISE NOTICE 'If admin_status shows "✅ ADMIN ACCESS GRANTED", you can now:';
RAISE NOTICE '1. Go to /admin-login';
RAISE NOTICE '2. Login with mayurwaghchoure1995@gmail.com / Sarah@1995';
RAISE NOTICE '3. Access /admin dashboard';
