DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  nationality VARCHAR(255),
  birth_year INTEGER
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  publication_date INTEGER,
  author_id INTEGER
);






INSERT INTO authors(name, nationality, birth_year) VALUES ('Adam Bray', 'United States of America', 1985);


# Other

-- for reference

CREATE DATABASE purple_cow;

CREATE TABLE contacts (
	id SERIAL PRIMARY KEY
	email VARCHAR(255)
);

INSERT INTO contacts (
	(email) VALUES ('ethanbevan00@gmail.com')
);


SELECT id, email FROM 
contacts;

SELECT * FROM contacts;

SELECT * FROM contacts WHERE id = 2;

SELECT * FROM contacts WHERE email = 'genericemail@gmail.com'; 


DELETE FROM contacts WHERE id = 1;

UPDATE contacts SET email = 'pudding@cake.com' WHERE id =2;

--  (
-- 	(email) VALUES ('ethanbevan00@gmail.com')
-- );

