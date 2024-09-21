import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
    const [industry, setIndustry] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [salary, setSalary] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [education, setEducation] = useState('');
    const [internshipFormat, setInternshipFormat] = useState('');

    const handleFilter = () => {
        onFilter({ industry, specialty, salary, employmentType, education, internshipFormat });
    };

    return (
        <div className="filters">
            <div>
                <label>Отрасль:</label>
                <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option value="">Выберите отрасль</option>
                    <option value="Автомобильный бизнес">Автомобильный бизнес</option>
                    <option value="Гостиницы, рестораны, общепит, кейтеринг">Гостиницы, рестораны, общепит, кейтеринг</option>
                    {/* Добавьте остальные отрасли */}
                </select>
            </div>

            <div>
                <label>Специальность:</label>
                <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
                    <option value="">Выберите специальность</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    {/* Добавьте остальные специальности */}
                </select>
            </div>

            <div>
                <label>Заработная плата:</label>
                <select value={salary} onChange={(e) => setSalary(e.target.value)}>
                    <option value="">Выберите зарплату</option>
                    <option value="0">без заработной платы</option>
                    <option value="20000">от 20.000</option>
                    <option value="50000">от 50.000</option>
                    {/* Добавьте остальные зарплаты */}
                </select>
            </div>

            <div>
                <label>Тип занятости:</label>
                <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)}>
                    <option value="">Выберите тип занятости</option>
                    <option value="Полная занятость">Полная занятость</option>
                    <option value="Неполная занятость">Неполная занятость</option>
                </select>
            </div>

            <div>
                <label>Образование:</label>
                <select value={education} onChange={(e) => setEducation(e.target.value)}>
                    <option value="">Выберите образование</option>
                    <option value="высшее">высшее</option>
                    <option value="среднее профессиональное">среднее профессиональное</option>
                </select>
            </div>

            <div>
                <label>Формат стажировки:</label>
                <select value={internshipFormat} onChange={(e) => setInternshipFormat(e.target.value)}>
                    <option value="">Выберите формат стажировки</option>
                    <option value="дистанционно">дистанционно</option>
                    <option value="очно">очно</option>
                    <option value="совмещенный">совмещенный</option>
                </select>
            </div>

            <button onClick={handleFilter}>ФИЛЬТР</button>
        </div>
    );
};

export default Filters;