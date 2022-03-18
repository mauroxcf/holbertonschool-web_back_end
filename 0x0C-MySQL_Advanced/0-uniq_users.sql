-- Creates a table with constrains
CREATE TABLE IF NOT EXISTS `users` (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
`email` VARCHAR(255) NOT NULL, 
`name` VARCHAR(255),
UNIQUE(`email`)
);