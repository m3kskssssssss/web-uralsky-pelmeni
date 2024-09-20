# Run webserver

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# SQL DataBase & Table

Запуск через psql, в нем выполняем код ниже.

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

`port API: 5001`, `DataBase name: 'mydatabase'`, `Table name: users`, в server.js прописаны настройки для логина БД root без пароля, создавайте также.


## Запуск сервера БД

```bash
web-uralsky-pelmeni % node server/server.js
``` 
