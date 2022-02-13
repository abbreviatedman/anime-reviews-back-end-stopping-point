-- step 1: connect to the db

\c d8nqginudrrpiq

-- step 2: in case we already have tables, drop them

DROP TABLE IF EXISTS anime;
DROP TABLE IF EXISTS reviews;

-- step 3: create our tables

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
