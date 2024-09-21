import React, { useState } from 'react';

const AdminDashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState('personalInfo');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Личный кабинет АДМИНА</h1>

                <div className="personal-dashboard">
                    <div className="categories">
                        <h2 className="title-2">Выберите категорию</h2>
                        <ul>
                            <li onClick={() => handleCategoryChange('personalInfo')}>Информация об университете</li>
                            <li onClick={() => handleCategoryChange('interests')}>Мои интересы</li>
                        </ul>
                    </div>

                    <div className="content">
                        {selectedCategory === 'personalInfo' && (
                            <div className="personal-info">
                                <h2 className="title-2">Информация об университете</h2>
                                <input type="text" placeholder="Название" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Адрес" />
                                <input type="text" placeholder="Возраст" />
                                <input type="number" placeholder="Номер телефона" />
                                <input type="text" placeholder="Сайт" />

                                <button>Сохранить изменения</button>
                            </div>
                        )}

                        {selectedCategory === 'interests' && (
                            <div className="interests">
                                <h2 className="title-2">Мои интересы</h2>
                                
                                <button>Сохранить изменения</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminDashboard;