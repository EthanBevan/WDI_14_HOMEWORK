
CREATE DATABASE hogwarts_development;



CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  img_url VARCHAR(255)
);

CREATE TABLE houses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  img_url VARCHAR(255)
);


DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS houses;