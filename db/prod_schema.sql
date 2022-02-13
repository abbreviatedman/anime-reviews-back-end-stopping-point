-- step 1 incase we already have a db, drop it
DROP DATABASE IF EXISTS d8nqginudrrpiq
-- step 2 create the db
CREATE DATABASE d8nqginudrrpiq
-- step 3 connect to the db
\c d8nqginudrrpiq
-- step 4 create a table for the db with these values
CREATE TABLE anime (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    release INT
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  rating INT,
  CHECK (rating >= 0 AND rating <= 5),
  anime_id INTEGER REFERENCES anime (id)
    ON DELETE CASCADE
)
