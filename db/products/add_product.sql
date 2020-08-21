INSERT INTO products 
(name, price, description)
VALUES
($1, $2, $3);

SELECT * FROM products
ORDER BY product_id;