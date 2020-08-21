UPDATE products
SET 
name = ${name},
price = ${price},
description = ${description}
WHERE product_id = ${product_id};

SELECT * FROM products 
ORDER BY product_id;