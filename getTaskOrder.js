module.exports = function getTaskOrder(tasks) {
  const dependencies = {}; // Кількість залежностей у кожної задачі
  const result = []; // Результат (порядок виконання)
  const queue = []; // Задачі, які можна виконувати (без залежностей)

  for (const task in tasks) {
    dependencies[task] = tasks[task].length;
  }
  //   console.log(dependencies);

  // Знайти задачі без залежностей
  for (const task in dependencies) {
    if (dependencies[task] === 0) {
      queue.push(task);
    }
  }

  //  Обробляємо чергу
  while (queue.length > 0) {
    const current = queue.shift(); // беремо задачу з черги
    result.push(current); // додаємо в результат

    // Перевіряємо, кому вона була потрібна як залежність
    for (const task in tasks) {
      if (tasks[task].includes(current)) {
        dependencies[task]--; // забираємо цю залежність

        if (dependencies[task] === 0) {
          queue.push(task); // якщо тепер 0 — додаємо в чергу
        }
      }
    }
  }

  // Перевірка на цикли
  if (result.length !== Object.keys(tasks).length) {
    console.log("Є циклічна залежність!");
    return [];
  }

  return result;
};
