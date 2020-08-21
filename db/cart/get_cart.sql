SELECT c.cart_item_id, c.user_id, c.product_id, p.name, p.price, p.description FROM cart c
JOIN products p
ON c.product_id = p.product_id
WHERE c.user_id = $1;