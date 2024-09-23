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
    password: '1234qw', // ЗДЕСЬ СТАВЬТЕ СВОЙ ПАРОЛЬ
    database: 'practice_system'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Маршрут для получения данных из таблицы practice
app.get('/api/practice', (req, res) => {
    const sql = 'SELECT * FROM practice';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    });
  });

// Маршрут для регистрации
app.post('/api/register', async (req, res) => {
    const { email, password, login, userCategory } = req.body;
    let tableName;

    console.log('Received registration request:', req.body); // Логирование запроса

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
        case 'admin':
            tableName = 'admins'; // Убедитесь, что это соответствует вашей таблице
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
            res.status(200).json({ message: 'User registered successfully', userCategory });
        });
    });
});

// Маршрут для входа
app.post('/api/login', async (req, res) => {
    const { login, password, userCategory } = req.body;
    let tableName;

    console.log('Received login request:', req.body); // Логирование запроса

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
        case 'admin':
            tableName = 'admins'; // Убедитесь, что это соответствует вашей таблице
            break;
        default:
            return res.status(400).json({ message: 'Invalid user category' });
    }

    const sql = `SELECT * FROM ${tableName} WHERE login = ?`;
    db.query(sql, [login], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid login or password' });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (isPasswordValid) {
            res.status(200).json({ 
                message: 'Login successful',
                userCategory: userCategory // добавляем категорию пользователя
            });
        } else {
            res.status(401).json({ message: 'Invalid login or password' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});