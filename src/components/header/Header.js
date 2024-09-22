import React, { useState } from "react";
import "./style.css";
import ellipse from "./../../img/icons/ellipse_text.svg";
import starAnimated from "./../../img/star_animated.svg"; // Импортируй анимированную звезду
import blickAnimated from "./../../img/blick_animated.svg"; // Импортируй анимированное изображение
import blickStatic from "./../../img/blick_static.svg"; // Импортируй статичное изображение
import starStatic from "./../../img/star_static.svg"; // Импортируй статичное изображение звезды

const Header = () => {
    const [isStatic, setIsStatic] = useState(false); // Состояние для управления статичным состоянием

    const stars = [
        { left: '5%', top: '25%' },
        { left: '90%', top: '40%' },
        { left: '55%', top: '12%' },
        { left: '30%', top: '57%' }
    ];

    const blicksAnimated = [
        { left: '95%', top: '30%' },
        { left: '20%', top: '40%' },
        { left: '45%', top: '25%' },
    ];

    const blicksStatic = [
        { left: '70%', top: '40%' }
    ];

    const starsStatic = [
        { left: '80%', top: '10%' },
        { left: '60%', top: '50%' },
    ];

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__background">
                    {stars.map((star, index) => (
                        <img
                            key={index}
                            src={starAnimated}
                            alt="Star Animation"
                            className={`star-animation ${isStatic ? 'static' : ''}`}
                            style={{
                                left: star.left,
                                top: star.top,
                                transform: `translate(-50%, -50%)`
                            }}
                        />
                    ))}
                    {blicksAnimated.map((blick, index) => (
                        <img
                            key={index}
                            src={blickAnimated}
                            alt="Blick Animation"
                            className={`blick-animation ${isStatic ? 'static' : ''}`}
                            style={{
                                left: blick.left,
                                top: blick.top,
                                transform: `translate(-50%, -50%)`
                            }}
                        />
                    ))}
                    {blicksStatic.map((blick, index) => (
                        <img
                            key={index}
                            src={blickStatic}
                            alt="Blick Static"
                            className="blick-static"
                            style={{
                                left: blick.left,
                                top: blick.top,
                                transform: `translate(-50%, -50%)`
                            }}
                        />
                    ))}
                    {starsStatic.map((star, index) => (
                        <img
                            key={index}
                            src={starStatic}
                            alt="Star Static"
                            className="star-static"
                            style={{
                                left: star.left,
                                top: star.top,
                                transform: `translate(-50%, -50%)`
                            }}
                        />
                    ))}
                    <div className="tab">
                        <h1>
                            Производственные практики играют важную роль в образовательном процессе и подготовке специалистов. Они позволяют студентам и молодым специалистам получить практический опыт, который невозможно приобрести только в рамках теоретических занятий. Приглашаем пройти практику!
                            <div className="tickers">
                                <div className="ticker">
                                    {/* Повторяющийся текст */}
                                    {Array(14).fill(<h2 className="ticker__head">НОВОСТИ ПРАКТИК</h2>)}
                                </div>
                            </div>
                        </h1>
                    </div>
                    <img src={ellipse} alt="Rotating Icon" className="rotating-icon-text" />
                </div>
            </div>
        </header>
    );
}

export default Header;
