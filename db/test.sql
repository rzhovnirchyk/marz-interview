-- create test database for api.products
DROP DATABASE IF EXISTS `marz_test`;
CREATE DATABASE IF NOT EXISTS `marz_test`;
GRANT ALL PRIVILEGES ON marz_test.* TO 'interviewer'@'%';