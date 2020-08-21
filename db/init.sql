--structure of the database

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200),
    password VARCHAR(250)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price INT,
    description VARCHAR(500),
    image VARCHAR(300)
);

CREATE TABLE cart (
    cart_item_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    product_id INT REFERENCES products(product_id)
);