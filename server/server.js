const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // ЗДЕСЬ СТАВЬТЕ СВОЙ ПАРОЛЬ
  database: 'practice_system'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// Маршрут для регистрации
app.post('/api/register', async (req, res) => {
  const { email, password, login, userCategory } = req.body;

  let tableName;
  switch (userCategory) {
    case 'student':
      tableName = 'students';
      break;
    case 'teacher':
      tableName = 'universities';
      break;
    case 'enterprise':
      tableName = 'companies';
      break;
    default:
      return res.status(400).json({ error: 'Invalid user category' });
  }

  // Проверка существования email в выбранной таблице
  const checkEmailSql = `SELECT * FROM ${tableName} WHERE email = ?`;
  db.query(checkEmailSql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Вставка новой записи в соответствующую таблицу
    const insertSql = `INSERT INTO ${tableName} (email, password_hash, login) VALUES (?, ?, ?)`;
    db.query(insertSql, [email, hashedPassword, login], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'User registered successfully' });
    });
  });
});


// Маршрут для входа
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM students WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (isPasswordValid) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});