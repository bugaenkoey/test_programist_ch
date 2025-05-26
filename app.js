// Task 1

console.log("================ Task 1 ====================");
const findSubarraysWithSum = require("./findSubarraysWithSum");
const array = [2, 4, 6, 3, 1];
const targetSum = 7;
console.log(findSubarraysWithSum(array, targetSum));

// Task 2

console.log("================ Task 2 ====================");
const getTaskOrder = require("./getTaskOrder");

const tasks = {
  task1: ["task2", "task3"],
  task2: ["task3"],
  task3: [],
  task4: ["task1"],
};
console.log(getTaskOrder(tasks));

// Task 3

const sqlite3 = require("sqlite3").verbose();
let db1 = new sqlite3.Database("./test1.db");

db1.all(
  `
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
    `,
  [],
  (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("================ Task 3 ====================");
    console.log(rows);
  }
);

db1.close();

// task 4

// const sqlite3 = require("sqlite3").verbose();
let db2 = new sqlite3.Database("./test.db");

db2.all(
  `
  SELECT 
  c.customer_name,
  COUNT(o.order_id) AS total_orders,
  SUM(o.order_total) AS total_spent,
  AVG(o.order_total) AS average_order_value
  FROM customers c
  LEFT JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.customer_name
    ORDER BY total_spent DESC;
    `,
  [],
  (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("================ Task 4 ====================");
    console.log(rows); // Вивід результатів у консоль
  }
);

db2.close();
