-- Quick Admin Setup for mayurwaghchoure1995@gmail.com
-- Run this in Supabase SQL Editor

-- Step 1: Check if user exists and get ID
DO $$
DECLARE
    user_id UUID;
BEGIN
    -- Get the user ID
    SELECT id INTO user_id FROM auth.users WHERE email = 'mayurwaghchoure1995@gmail.com';
    
    IF user_id IS NOT NULL THEN
        -- Assign admin role
        INSERT INTO public.user_roles (user_id, role)
        VALUES (user_id, 'admin'::app_role)
        ON CONFLICT (user_id, role) DO NOTHING;
        
        RAISE NOTICE 'Admin role assigned to mayurwaghchoure1995@gmail.com';
    ELSE
        RAISE NOTICE 'User not found. Please create the user in Supabase Dashboard Authentication first.';
    END IF;
END $$;

-- Step 2: Verify admin access
SELECT 
    u.email,
    u.created_at,
    ur.role,
    CASE 
        WHEN ur.role = 'admin' THEN '✅ Admin Access Granted'
        ELSE '❌ No Admin Access'
    END as status
FROM auth.users u
LEFT JOIN public.user_roles ur ON u.id = ur.user_id
WHERE u.email = 'mayurwaghchoure1995@gmail.com';

-- Step 3: Check all admin users
SELECT 
    u.email,
    ur.role,
    u.created_at
FROM auth.users u
JOIN public.user_roles ur ON u.id = ur.user_id
WHERE ur.role = 'admin';
