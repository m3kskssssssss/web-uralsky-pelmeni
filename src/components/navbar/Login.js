import React from 'react';

const Login = () => {
    return (
        <main className="section">
    <div className="container">
            <h1 className="title-1">Вход:</h1>

            <ul className="content-list">
                <li className="content-list__item">

            <form>
                <input className="title-2" type="text" placeholder="Логин" required />
                <input className="title-2" type="password" placeholder="Пароль" required />
                <button className="title-2" type="submit">Войти</button>
            </form>
                </li>
            </ul>

    </div>
    </main>)
};

export default Login;