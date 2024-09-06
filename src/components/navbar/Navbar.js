import moon from "./../../img/icons/moon.svg";
import sun from "./../../img/icons/sun.svg";
import shest from "./../../img/icons/shest.svg";

import { NavLink } from "react-router-dom";

import "./style.css";

const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (          
    
    <nav className="nav">
    <div className="container">
        <div className="nav-row">

        <img src={shest} alt="Rotating Icon" className="rotating-icon" />

            <NavLink to="/" className="logo">
                <strong>БИРЖА ПРАКТИК</strong>
            </NavLink>

            <button className="dark-mode-btn">
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>

            <ul className="nav-list">


                

                <li className="nav-list__item">

                <NavLink to="/" className={({isActive}) => {
                    return isActive ? activeLink : normalLink;
                }}>
                    Главная
                </NavLink>

                </li>

                <li className="nav-list__item">

                <NavLink to="/projects" className={({isActive}) => {
                    return isActive ? activeLink : normalLink;
                }}>
                    Практики
                </NavLink>

                </li>

                <li className="nav-list__item">

                <NavLink to="/contacts" className={({isActive}) => {
                    return isActive ? activeLink : normalLink;
                }}>
                    Контакты
                </NavLink>

                </li>

            </ul>
        </div>
    </div>
</nav> );

}

export default Navbar;