const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Главная страница
app.get('/', (req, res) => {
  res.send('Привет, мир! 🚀');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
