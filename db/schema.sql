CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT(10) AUTO_INCREMENT NOT NULL,
  PRIMARY KEY (id),
  burger_name VARCHAR(50),
  devoured BOOLEAN DEFAULT false
)
