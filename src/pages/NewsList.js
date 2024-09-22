// components/NewsList.js
import React, { useState } from 'react';
import './style.css'; // Импортируем стили, если необходимо
import Img1 from "./../img/projects/16.png"
import Img2 from "./../img/projects/17.png"
import Img3 from "./../img/projects/18.png"
import Img4 from "./../img/projects/19.png"
import Img5 from "./../img/projects/20.png"
import Img6 from "./../img/projects/21.png"
import Img7 from "./../img/projects/22.png"



const initialNewsData = [
    {
        id: 1,
        title: "станочная инновация",
        image: Img1, // Укажите путь к изображению
        content: "Инновационная система контроля выбросов искр...",
        fullContent: "Инновационная система контроля выбросов искр появилась на одном из станков Смоленской области"
    },
    {
        id: 2,
        title: "цементооборот России и Беларуси",
        image: Img2,
        content: "достиг рекордного значения в...",
        fullContent: "достиг рекордного значения в 12 млрд килограммов цемента за 2023 год что обновило 32 летний максимум"
    },
    {
        id: 3,
        title: "Архитектура производства",
        image: Img3,
        content: "Обучиться на архитектора стало можно...",
        fullContent: "Обучиться на архитектора стало можно онлайн через Госуслуги, откроется эта возможность после 7 ноября"
    },
    {
        id: 4,
        title: "Проложены новые маршруты",
        image: Img4,
        content: "Газооборот доходит и до...",
        fullContent: "Газооборот доходит и до наших самых дружественных восточных соседей - Китая!"
    },
    {
        id: 5,
        title: "пт новость",
        image: Img5,
        content: "Краткое содержание пт новости...",
        fullContent: "Полное содержание пт новости..."
    },
    
    // Добавьте больше новостей по мере необходимости
];

const NewsList = () => {
    const [newsData, setNewsData] = useState(initialNewsData);
    const [selectedNews, setSelectedNews] = useState(null);

    const handleNewsClick = (news) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    const deleteNews = (id) => {
        setNewsData(newsData.filter(news => news.id !== id));
    };

    return (
        <div className="news-list">
            {newsData.map(news => (
                <div key={news.id} className="news-item" onClick={() => handleNewsClick(news)}>
                    <img src={news.image} alt={news.title} className="news-image" />
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-content">{news.content}</p>
                    
                </div>
            ))}

            {selectedNews && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedNews.title}</h2>
                        <img src={selectedNews.image} alt={selectedNews.title} className="modal-image" />
                        <p>{selectedNews.fullContent}</p>
                        <button className="close-button" onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsList;