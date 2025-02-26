DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users_roles;

CREATE TABLE roles(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (20) NOT NULL
);

CREATE TABLE users(
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR (250) NOT NULL,
   lastname VARCHAR (250) NOT NULL,
   email VARCHAR (250) NOT NULL UNIQUE,
   created_at TIMESTAMP NOT NULL,
   username VARCHAR (250) NOT NULL UNIQUE,
   password VARCHAR (250) NOT NULL
);

CREATE TABLE users_roles(
   user_id BIGINT NOT NULL,
   role_id BIGINT NOT NULL,
   PRIMARY KEY (user_id, role_id),
   FOREIGN KEY (role_id) REFERENCES roles,
   FOREIGN KEY (user_id) REFERENCES users
);
