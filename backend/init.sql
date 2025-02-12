
CREATE DATABASE IF NOT EXISTS todo_app;
USE todo_app;
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'completed') DEFAULT 'pending'
);
SHOW DATABASES;
