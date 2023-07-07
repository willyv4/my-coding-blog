DROP DATABASE IF EXISTS "my_blog";

CREATE DATABASE "my_blog";

\c "my_blog"
CREATE TABLE posts(
    id text PRIMARY KEY,
    title text NOT NULL,
    description text NOT NULL,
    body text,
    votes int NOT NULL DEFAULT 0
);

CREATE TABLE comments(
    id text PRIMARY KEY,
    username text NOT NULL,
    comment text NOT NULL,
    post_id text NOT NULL REFERENCES posts ON DELETE CASCADE
);

-- INSERT INTO posts(title, description, body)
--     VALUES ('First Post', 'Best post ever!', 'Everyone loves posting first. I win!'),
-- ('Second Post', 'A very good post!', 'Oh well. Didn''t get to be first.');
-- INSERT INTO comments(TEXT, post_id)
--     VALUES ('This is a really great post.', 1),
-- ('I learned so much reading this.', 1);
