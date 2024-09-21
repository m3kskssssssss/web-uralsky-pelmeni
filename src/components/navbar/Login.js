import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userCategory, setUserCategory] = useState('student');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Инициализируем хук

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('http://localhost:5001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password, userCategory }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(data)); // Сохраняем данные пользователя
            alert('Вход успешен!');
            navigate('/projects'); // Переход на страницу /projects
        } else {
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
                            <select
                                className="title-2"
                                value={userCategory}
                                onChange={(e) => setUserCategory(e.target.value)}
                                required
                            >
                                <option value="student">Студент</option>
                                <option value="teacher">Университет/СПО</option>
                                <option value="enterprise">Предприятие</option>
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
