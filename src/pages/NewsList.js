// components/NewsList.js
import React, { useState } from 'react';
import './style.css'; // Импортируем стили, если необходимо
import Img1 from "./../img/projects/01-big.jpg"
import Img2 from "./../img/projects/02-big.jpg"
import Img3 from "./../img/projects/03-big.jpg"
import Img4 from "./../img/projects/04-big.jpg"
import Img5 from "./../img/projects/05-big.jpg"
import Img6 from "./../img/projects/06-big.jpg"
import Img7 from "./../img/projects/07-big.jpg"



const initialNewsData = [
    {
        id: 1,
        title: "Первая новость",
        image: Img1, // Укажите путь к изображению
        content: "Краткое содержание первой новости...",
        fullContent: "Полное содержание первой новости..."
    },
    {
        id: 2,
        title: "Вторая новость",
        image: Img2,
        content: "Краткое содержание второй новости...",
        fullContent: "Полное содержание второй новости..."
    },
    {
        id: 3,
        title: "Треться новость",
        image: Img3,
        content: "Краткое содержание тр новости...",
        fullContent: "Полное содержание тр новости..."
    },
    {
        id: 4,
        title: "чт новость",
        image: Img4,
        content: "Краткое содержание чт новости...",
        fullContent: "Полное содержание чт новости..."
    },
    {
        id: 5,
        title: "пт новость",
        image: Img5,
        content: "Краткое содержание пт новости...",
        fullContent: "Полное содержание пт новости..."
    },
    {
        id: 6,
        title: "шт новость",
        image: Img6,
        content: "Краткое содержание шт новости...",
        fullContent: "Полное содержание шт новости..."
    },
    {
        id: 7,
        title: "см новость",
        image: Img7,
        content: "Краткое содержание см новости...",
        fullContent: "Полное содержание см новости..."
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