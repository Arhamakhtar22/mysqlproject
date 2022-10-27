-- Find Earliest Date A User Joined --
SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date FROM users;
 
-- Find the email of the first user ever --
SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

-- No.of users registered every month --

SELECT MONTHNAME(created_at) as month, COUNT(*) as count FROM users GROUP BY month ORDER BY count DESC;

-- All yahoo users --
SELECT COUNT(*) AS 'no.of yahoo users' FROM users WHERE email LIKE '%yahoo%';

-- Total Number of Users for Each Email Host --
SELECT
    CASE 
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END as provider,
    COUNT(*) as total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;