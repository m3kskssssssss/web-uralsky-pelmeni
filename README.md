# ВАЖНОЕ

меняйте свой password в server/server.js

# Run webserver

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# SQL DataBase & Table

Шаги устаовки:
1. Качаем MySQL с оффсайта (который 300мб).
2. Config type - Development Computer. (порт можно оставить 3306, но вообще вроде 5001)
3. Если там где-то спросит для разработчика или пользователя ставим что типа мы крутые разрабы и то и то.
3. Остальное далее-далее, пароль для root можно поставить root.

Далее:
1. Windows > Настройки > ищем в поиске "переменные" > изменить переменные среды
2. Переменные среды > Системные переменные и ищем там Path > Нажимаем изменить
3. Нажимаем создать и прописываем C:\Program Files\MySQL\MySQL Server 8.0\bin\ или другой путь где у вас лежит `mysql.exe`

Теперь mysql можно использовать в любой cli и IDE. Иногда надо перезапустить прогу или перезагрузиться.

## Запуск сервера БД

Запускаем сервер командой ниже, при необходимости обновляем зависимости (npm install)

```bash
node server/server.js
``` 

## Создание таблицы БД

1. Пишем в консоли `mysql -u root -p` или без пароля `mysql -u root`
2. Код ниже
```sql
CREATE DATABASE university_system;

USE university_system;

CREATE TABLE students (
login VARCHAR(30) NOT NULL,
student_id INT UNIQUE,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(100) UNIQUE NOT NULL,
phone VARCHAR(20) UNIQUE,
date_of_birth DATE,
gender ENUM('Male', 'Female', 'Other'),
education_level VARCHAR(50),
password_hash VARCHAR(255) NOT NULL,
registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
id INT AUTO_INCREMENT PRIMARY KEY,
status ENUM('Active', 'Inactive')
);

CREATE TABLE companies (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) UNIQUE NOT NULL,
login VARCHAR(30) NOT NULL,
password_hash VARCHAR(255) NOT NULL,
company_name VARCHAR(100),
registration_number VARCHAR(20) UNIQUE,
contact_person VARCHAR(100),
phone VARCHAR(20) UNIQUE,
address VARCHAR(255),
industry VARCHAR(100),
website VARCHAR(255),
status ENUM('Active', 'Inactive')
);

CREATE TABLE universities (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
login VARCHAR(30) NOT NULL,
university_name VARCHAR(100),
contact_person VARCHAR(100),
phone VARCHAR(20) UNIQUE,
address VARCHAR(255),
website VARCHAR(255)
);

CREATE TABLE practice (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
description TEXT,
places INT NOT NULL
);

CREATE TABLE practice_offer (
    offer_id INT AUTO_INCREMENT PRIMARY KEY,
    practice_id INT NOT NULL,
    company_id INT NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('Pending', 'Approved', 'Rejected') NOT NULL,
    date_of_application DATETIME DEFAULT CURRENT_TIMESTAMP,
    student_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (company_id) REFERENCES companies(id),
    FOREIGN KEY (practice_id) REFERENCES practice(id)
);
```
3. Проверить что все ок - `SHOW DATABASES`. Будет 7 включая нашу.

По сути все. Удобнее сделать три консоли:
1. консоль для mysql локально
2. консоль для webserver 3000
3. консоль для MySQL server 5001

## Это пока не трогаем

1. Открываем файлик `.env.example` это пример как заполнять свой `.env`
2. Создаем свой `.env` в КОРНЕВОЙ ПАПКЕ с вашими настройками БД
3. Не пушим `.env` в git если предложит