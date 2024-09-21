app.post('/api/login', async (req, res) => {
  const { login, password, userCategory } = req.body;

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
          // Возвращаем информацию о пользователе и его категории
          res.status(200).json({ 
              message: 'Login successful',
              userCategory: userCategory // добавляем категорию пользователя
          });
      } else {
          res.status(401).json({ message: 'Invalid login or password' });
      }
  });
});