CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT NOT NULL
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    order_date DATE,
    order_total REAL,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

INSERT INTO customers (customer_id, customer_name) VALUES
(1, 'John'),
(2, 'Alice'),
(3, 'Bob');

INSERT INTO orders (order_id, customer_id, order_date, order_total) VALUES
(1, 1, '2024-01-10', 100.00),
(2, 2, '2024-01-11', 200.00),
(3, 1, '2024-01-12', 150.00),
(4, 3, '2024-01-12', 50.00),
(5, 2, '2024-01-13', 300.00);
