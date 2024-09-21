import React, { useState } from 'react';
import './Filters.css';
import './style.css';

const Filters = ({ onFilter }) => {
    const [industry, setIndustry] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [salary, setSalary] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [education, setEducation] = useState('');
    const [internshipFormat, setInternshipFormat] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleFilterToggle = () => {
        setIsVisible(!isVisible);
    };

    const handleFilter = () => {
        onFilter({ industry, specialty, salary, employmentType, education, internshipFormat });
    };

    return (
        <div>
            <button onClick={handleFilterToggle}>
                {isVisible ? 'Скрыть фильтры' : 'Показать фильтры'}
            </button>
            {isVisible && (
                <div className="filter-options">
                    <div className="filter-item">
                        <label>Отрасль:</label>
                        <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                            <option value="">Выберите отрасль</option>
                            <option value="Гостиницы, рестораны, общепит">Гостиницы, рестораны, общепит</option>
                            <option value="Государственные организации">Государственные организации</option>
                            <option value="Добывающая отрасль">Добывающая отрасль</option>
                            <option value="Информационные технологии, системная интеграция, интернет">Информационные технологии, системная интеграция, интернет</option>
                            <option value="Искусство, культура">Искусство, культура</option>
                            <option value="Лесная промышленность, деревообработка">Лесная промышленность, деревообработка</option>
                            <option value="Медицина, фармацевтика, аптеки">Медицина, фармацевтика, аптеки</option>
                            <option value="Металлургия, металлообработка">Металлургия, металлообработка</option>
                            <option value="Нефть и газ">Нефть и газ</option>
                            <option value="Образовательные учреждения">Образовательные учреждения</option>
                            <option value="Общественная деятельность">Общественная деятельность</option>
                            <option value="Перевозки, логистика, склад">Перевозки, логистика, склад</option>
                            <option value="Продукты питания">Продукты питания</option>
                            <option value="Промышленное оборудование, техника, станки и комплектующие">Промышленное оборудование, техника, станки и комплектующие</option>
                            <option value="Розничная торговля">Розничная торговля</option>
                            <option value="СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование">СМИ, маркетинг, реклама, BTL, PR, дизайн, продюсирование</option>
                            <option value="Сельское хозяйство">Сельское хозяйство</option>
                            <option value="Строительство, недвижимость, эксплуатация, проектирование">Строительство, недвижимость, эксплуатация, проектирование</option>
                            <option value="Телекоммуникации, связь">Телекоммуникации, связь</option>
                            <option value="Тяжелое машиностроение">Тяжелое машиностроение</option>
                            <option value="Управление многопрофильными активами">Управление многопрофильными активами</option>
                            <option value="Услуги для бизнеса">Услуги для бизнеса</option>
                            <option value="Услуги для населения">Услуги для населения</option>
                            <option value="Финансовый сектор">Финансовый сектор</option>
                            <option value="Химическое производство, удобрения">Химическое производство, удобрения</option>
                            <option value="Электроника, приборостроение, бытовая техника, компьютеры и оргтехника">Электроника, приборостроение, бытовая техника, компьютеры и оргтехника</option>
                            <option value="Энергетика">Энергетика</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        <label>Специальность:</label>
                        <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                            <option value="">Выберите специальность</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        <label>Заработная плата:</label>
                        <select value={salary} onChange={(e) => setSalary(e.target.value)}>
                            <option value="">Выберите зарплату</option>
                            <option value="0">без заработной платы</option>
                            <option value="20000">от 20.000</option>
                            <option value="50000">от 50.000</option>
                            <option value="70000">от 70.000</option>
                            <option value="100000">от 100.000</option>
                            <option value="130000">от 130.000</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        <label>Тип занятости:</label>
                        <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
                            <option value="">Выберите тип занятости</option>
                            <option value="Полная занятость">Полная занятость</option>
                            <option value="Неполная занятость">Неполная занятость</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        <label>Образование:</label>
                        <select value={education} onChange={(e) => setEducation(e.target.value)}>
                            <option value="">Выберите образование</option>
                            <option value="Высшее">Высшее</option>
                            <option value="Среднее профессиональное">Среднее профессиональное</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        <label>Формат стажировки:</label>
                        <select value={internshipFormat} onChange={(e) => setInternshipFormat(e.target.value)}>
                            <option value="">Выберите формат стажировки</option>
                            <option value="Дистанционно">Дистанционно</option>
                            <option value="Очно">Очно</option>
                            <option value="Совмещенный">Совмещенный</option>
                        </select>
                    </div>
                </div>
            )}
            <button onClick={handleFilter}>ПРИМЕНИТЬ ФИЛЬТР</button>
        </div>
    );
};

export default Filters;
