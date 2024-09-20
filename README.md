# Run webserver

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# SQL DataBase & Table

Шаги установки:
1. Качаем MySQL с оффсайта (который 300мб).
2. Config type - Development Computer. (порт можно оставить 3306, но вообще вроде 5001)
3. Если там где то спросит для разработчика или пользователя ставим что типа мы крутые разрабы и то и то.
3. Остальное далее далее, пароль для root можно поставить root.

Далее:
1. Windows > Настройки > ищем в поиске "переменные" > изменить переменные среды
2. Переменные среды > Системные переменные и ищем там Path > Нажимаем изменить
3. Нажимаем создать и прописываем C:\Program Files\MySQL\MySQL Server 8.0\bin\ или другой путь где у вас лежит `mysql.exe`

Теперь mysql можно использовать в любой cli и IDE. Иногда надо перезапустить прогу или перезагрузиться.

1. Пишем в консоли `mysql -u root -p` или без пароля `mysql -u root`
2. Код ниже
```sql
CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL
);
```
3. Проверить что все ок - `SHOW DATABASES`. Будет 7 включая нашу.

`port API: 5001`, `DataBase name: 'mydatabase'`, `Table name: users`, в server.js прописаны настройки для логина БД root без пароля, создавайте также.


## Запуск сервера БД

```bash
web-uralsky-pelmeni % node server/server.js
``` 
