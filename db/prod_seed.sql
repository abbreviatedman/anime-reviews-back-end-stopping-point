-- step 1 connect to the db
\c d8nqginudrrpiq
-- step 2 add values to our table
INSERT INTO anime (name, release) VALUES 
('One Piece', 1999),
('Naruto', 2002),
('Jujutsu Kaisen', 2020),
('Cowboy Bebop', 1998);


INSERT INTO reviews (anime_id, reviewer, title, content, rating) VALUES 
('1', 'Jose', 'overwhelming', 'watched one piece when i was young, thought i could catch up...', 4),
('3', 'Jose', 'new', 'definitely one of the best new animes', 4),
('2', 'Jose', 'Nostalgia', 'one of my first animes, purely nostalgia', 5),
('4', 'Colin', 'A stylish exploration of genres.', 'Plus it''s got a killer jazz opening theme!', 5),
('4', 'Not Jose', 'oldie but goldie', '1, 2, 3, 4, lets go', 5);
