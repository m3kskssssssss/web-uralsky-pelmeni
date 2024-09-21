import axios from 'axios';
import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";
import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";
import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

// Инициализация массива projects с минимальными данными
const projects = [
    {
        img: project01,
        imgBig: project01Big,
        date: "01.11.2024 - 31.01.2025",
        university: "Уральский Федеральный Университет",
        link_university: "https://urfu.ru/ru/",
        company: "IT Solutions Inc.",
        link_company: "https://www.itsolutions.co.uk",
        industry: "Информационные технологии, системная интеграция, интернет",
        employmentType: "Полная занятость",
        education: "Высшее",
        internshipFormat: "Очно"
    },
    {
        img: project02,
        imgBig: project02Big,
        date: "01.12.2024 - 28.02.2025",
        university: "Высшая школа экономики",
        link_university: "https://www.hse.ru",
        company: "Tech Quality Group",
        link_company: "https://www.tqg.de/en/",
        industry: "Информационные технологии, системная интеграция, интернет",
        employmentType: "Полная занятость",
        education: "Высшее",
        internshipFormat: "Дистанционно"
    },
    {
        img: project03,
        imgBig: project03Big,
        date: "15.11.2024 - 15.02.2025",
        university: "Уральский Федеральный Университет",
        link_university: "https://urfu.ru/ru/",
        company: "Data Insights Ltd.",
        link_company: "https://find-and-update.company-information.service.gov.uk/company/12829078",
        industry: "Информационные технологии, системная интеграция, интернет",
        employmentType: "Неполная занятость",
        education: "Высшее",
        internshipFormat: "Дистанционно"
    }
];

// Функция для получения данных из базы данных и обновления массива projects
const fetchPracticeData = async () => {
    try {
        const response = await axios.get('http://localhost:5001/api/practice');
        const practiceData = response.data;

        console.log('Fetched practice data:', practiceData);

        // Обновляем массив projects на основе данных из базы данных
        practiceData.forEach((data, index) => {
            if (index < projects.length) {
                projects[index].specialty = data.name;
                projects[index].description = data.description;
                projects[index].salary = data.salary;
                projects[index].places = data.places;
            }
        });

        console.log('Updated projects:', projects);
    } catch (error) {
        console.error('Error fetching practice data:', error);
    }
};

// Вызов функции для получения данных при загрузке страницы
fetchPracticeData();

export { projects };