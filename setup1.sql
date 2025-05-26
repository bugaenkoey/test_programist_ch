-- Таблиці
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date TEXT
);

CREATE TABLE order_items (
    item_id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER
);

-- Дані
INSERT INTO products VALUES (1, 'Product A'), (2, 'Product B'), (3, 'Product C');

INSERT INTO orders VALUES 
(1, 101, '2024-01-10'),
(2, 102, '2024-01-11'),
(3, 101, '2024-01-12');

INSERT INTO order_items VALUES
(1, 1, 1, 2),
(2, 1, 2, 1),
(3, 2, 1, 1),
(4, 3, 3, 4);

-- Запит
SELECT
  o.customer_id,
  MAX(o.order_date) AS last_order_date
FROM
  orders o
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY
  o.customer_id
HAVING
  COUNT(DISTINCT oi.product_id) = (
    SELECT COUNT(*) FROM products
  );
