import React from 'react';

const Register = () => {
    return (
        <main className="section">
        <div className="container">
            <h1 className="title-1">Регистрация:</h1>

            <ul className="content-list">
                <li className="content-list__item">

                <form>
                <input className="title-2" type="text" placeholder="Логин" required />
                <input className="title-2" type="password" placeholder="Пароль" required />
                <input className="title-2" type="email" placeholder="Email" required />
                <button className="title-2" type="submit">Зарегистрироваться</button>
            </form>
                </li>
            </ul>

    </div>
    </main>);
};

export default Register;

