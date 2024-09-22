import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personal = () => {
    const [selectedCategory, setSelectedCategory] = useState('personalInfo');
    const navigate = useNavigate(); // Хук для навигации

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };



    return (
        <main className="section">
            <div className="container">
                <h1 className="title-4">Личный кабинет студента</h1>
                

                <div className="personal-dashboard">
                    <div className="categories">
                        <h2 className="title-2">Выберите категорию</h2>
                        <ul>
                            <li onClick={() => handleCategoryChange('personalInfo')}>Личная информация</li>
                            <li onClick={() => handleCategoryChange('interests')}>Мои интересы</li>
                            <li onClick={() => handleCategoryChange('interests')}>Мои практики</li>
                        </ul>
                    </div>

                    <div className="content">
                        {selectedCategory === 'personalInfo' && (
                            <div className="personal-info">
                                <h2 className="title-2">Личная информация</h2>
                                <input type="text" placeholder="Имя" />
                                <input type="text" placeholder="Фамилия" />
                                <input type="text" placeholder="Отчество" />
                                <input type="number" placeholder="Возраст" />
                                <p type="text">Пол</p>
                                <select>
                                    <option value=""></option>
                                    <option value="male">Мужской</option>
                                    <option value="female">Женский</option>
                                </select>
                                <input type="text" placeholder="Студенческий билет" />
                                <input type="text" placeholder="Email" />
                                <input type="number" placeholder="Номер телефона" />

                                <button>Сохранить изменения</button>
                            </div>
                        )}

                        {selectedCategory === 'interests' && (
                            <div className="interests">
                                <h2 className="title-2">Мои интересы</h2>
                                <label>
<input type="checkbox" value="Гостиницы, рестораны, общепит" /> Гостиницы, рестораны, общепит
</label>
<label>
    <input type="checkbox" value="Государственные организации" /> Государственные организации
</label>
<label>
    <input type="checkbox" value="Добывающая отрасль" /> Добывающая отрасль
</label>
<label>
    <input type="checkbox" value="Информационные технологии, системная интеграция, интернет" /> Информационные технологии, системная интеграция, интернет
</label>
<label>
    <input type="checkbox" value="Искусство, культура" /> Искусство, культура
</label>
<label>
    <input type="checkbox" value="Лесная промышленность, деревообработка" /> Лесная промышленность, деревообработка
</label>
<label>
    <input type="checkbox" value="Медицина, фармацевтика, аптеки" /> Медицина, фармацевтика, аптеки
</label>
<label>
    <input type="checkbox" value="Металлургия, металлообработка" /> Металлургия, металлообработка
</label>
<label>
    <input type="checkbox" value="Нефть и газ" /> Нефть и газ
</label>
<label>
    <input type="checkbox" value="Образовательные учреждения" /> Образовательные учреждения
</label>
<label>
    <input type="checkbox" value="Общественная деятельность" /> Общественная деятельность
</label>
<label>
    <input type="checkbox" value="Перевозки, логистика, склад" /> Перевозки, логистика, склад
</label>
<label>
    <input type="checkbox" value="Продукты питания" /> Продукты питания
</label>
<label>
    <input type="checkbox" value="Промышленное оборудование, техника, станки и комплектующие" /> Промышленное оборудование, техника, станки и комплектующие
</label>
<label>
    <input type="checkbox" value="Розничная торговля" /> Розничная торговля
</label>
<label>
    <input type="checkbox" value="СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование" /> СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование
</label>
<label>
    <input type="checkbox" value="Сельское хозяйство" /> Сельское хозяйство
</label>
<label>
    <input type="checkbox" value="Строительство, недвижимость, эксплуатация, проектирование" /> Строительство, недвижимость, эксплуатация, проектирование
</label>
<label>
    <input type="checkbox" value="Телекоммуникации, связь" /> Телекоммуникации, связь
</label>
<label>
    <input type="checkbox" value="Тяжелое машиностроение" /> Тяжелое машиностроение
</label>
<label>
    <input type="checkbox" value="Управление многопрофильными активами" /> Управление многопрофильными активами
</label>
<label>
    <input type="checkbox" value="Услуги для бизнеса" /> Услуги для бизнеса
</label>
<label>
    <input type="checkbox" value="Услуги для населения" /> Услуги для населения
</label>
<label>
    <input type="checkbox" value="Финансовый сектор" /> Финансовый сектор
</label>
<label>
    <input type="checkbox" value="Химическое производство, удобрения" /> Химическое производство, удобрения
</label>
<label>
    <input type="checkbox" value="Электроника, приборостроение, бытовая техника, компьютеры и оргтехника" /> Электроника, приборостроение, бытовая техника, компьютеры и оргтехника
</label>
<label>
    <input type="checkbox" value="Энергетика" /> Энергетика
</label>
                                <button>Сохранить изменения</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Personal;