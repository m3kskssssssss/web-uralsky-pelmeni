import React, { useState } from "react";
import shest from "./../../img/icons/shest.svg";
import loginIcon from "./../../img/icons/login.svg"; // Импортируйте иконку для входа
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate(); // Хук для навигации

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const handleLoginClick = () => {
        navigate("/login"); // Переход на страницу входа
        setModalOpen(false); // Закрыть модальное окно
    };

    const handleRegisterClick = () => {
        navigate("/register"); // Переход на страницу регистрации
        setModalOpen(false); // Закрыть модальное окно
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <img src={shest} alt="Rotating Icon" className="rotating-icon" />
                    <NavLink to="/" className="logo">
                        <strong>БИРЖА ПРАКТИК</strong>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Главная
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Практики
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Контакты
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/personal" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                                Личный кабинет
                            </NavLink>
                        </li>
                        <li className="nav-list__item" onClick={toggleModal}>
                            <NavLink className={({ isActive }) => (isActive ? normalLink : normalLink)}>
                            <img src={loginIcon} alt="Login Icon" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={toggleModal} className="close-button">х</button>
                        <h1>Войдите или зарегистрируйтесь</h1>
                        <button onClick={handleLoginClick}>Вход</button>
                        <button onClick={handleRegisterClick}>Регистрация</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;