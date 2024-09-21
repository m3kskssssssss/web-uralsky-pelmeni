import axios from 'axios';

import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

import project07 from "./../img/projects/07.jpg";
import project07Big from "./../img/projects/07-big.jpg";

import project08 from "./../img/projects/08.jpg";
import project08Big from "./../img/projects/08-big.jpg";

import project09 from "./../img/projects/09.jpg";
import project09Big from "./../img/projects/09-big.jpg";

import project10 from "./../img/projects/10.jpg";
import project10Big from "./../img/projects/10-big.jpg";

import project11 from "./../img/projects/11.jpg";
import project11Big from "./../img/projects/11-big.jpg";

import project12 from "./../img/projects/12.jpg";
import project12Big from "./../img/projects/12-big.jpg";

import project13 from "./../img/projects/13.jpg";
import project13Big from "./../img/projects/13-big.jpg";

import project14 from "./../img/projects/14.jpg";
import project14Big from "./../img/projects/14-big.jpg";

import project15 from "./../img/projects/15.jpg";
import project15Big from "./../img/projects/15-big.jpg";

const projects = [
    {
        img: project01,
        imgBig: project01Big
    },
    {
        img: project02,
        imgBig: project02Big
    },
    {
        img: project03,
        imgBig: project03Big
    },
    {
        img: project04,
        imgBig: project04Big
    },
    {
        img: project05,
        imgBig: project05Big
    },
    {
        img: project06,
        imgBig: project06Big
    },
    {
        img: project07,
        imgBig: project07Big
    },
    {
        img: project08,
        imgBig: project08Big
    },
    {
        img: project09,
        imgBig: project09Big
    },
    {
        img: project10,
        imgBig: project10Big
    },
    {
        img: project11,
        imgBig: project11Big
    },
    {
        img: project12,
        imgBig: project12Big
    },
    {
        img: project13,
        imgBig: project13Big
    },
    {
        img: project14,
        imgBig: project14Big
    },
    {
        img: project15,
        imgBig: project15Big
    },
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
                projects[index].name = data.name;
                projects[index].description = data.description;
                projects[index].start_date = data.start_date;
                projects[index].end_date = data.end_date;
                projects[index].salary = data.salary;
                projects[index].places = data.places;
                projects[index].image_data = data.image_data; // Если есть изображение
                projects[index].university = data.university;
                projects[index].link_university = data.link_university;
                projects[index].company = data.company;
                projects[index].link_company = data.link_company;
                projects[index].industry = data.industry;
                projects[index].employmentType = data.employmentType;
                projects[index].education = data.education;
                projects[index].internshipFormat = data.internshipFormat;
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