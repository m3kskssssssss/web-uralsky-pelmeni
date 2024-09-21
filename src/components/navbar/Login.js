import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userCategory, setUserCategory] = useState('student'); // Добавим состояние для категории
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('http://localhost:5001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password, userCategory }), // Передаем категорию
        });

        const data = await response.json();

        if (response.ok) {
            // Успешный вход
            localStorage.setItem('user', JSON.stringify(data)); // Сохраняем данные пользователя
            localStorage.setItem('userCategory', userCategory); // Сохраняем категорию пользователя
            alert('Вход успешен!');
            // Можно перенаправить пользователя на его личный кабинет
            window.location.href = `/${userCategory}`; // Перенаправляем на соответствующий личный кабинет
        } else {
            // Ошибка входа
            setError(data.message);
        }
    };

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Вход:</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul className="content-list">
                    <li className="content-list__item">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="title-2"
                                type="text"
                                placeholder="Логин"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                            />
                            <input
                                className="title-2"
                                type="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <select onChange={(e) => setUserCategory(e.target.value)} value={userCategory}>
                                <option value="student">Студент</option>
                                <option value="teacher">Учитель</option>
                                <option value="enterprise">Предприятие</option>
                                <option value="admin">Администратор</option> {/* Новая категория */}
                            </select>
                            <button className="title-2" type="submit">Войти</button>
                        </form>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Login;