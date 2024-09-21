import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectList";
import './Project.css'; // Добавьте импорт стилей

const Project = () => {
    const { id } = useParams(); // Получаем id из параметров маршрута
    const project = projects[id]; // Получаем проект по id

    return (
        <main className="section">
            <div className="container">
                {project && (
                    <div className="project-details">
                        {/* Заголовок проекта */}
                        <h2 className="title-1">{project.specialty}</h2>

                        <div className="project-details__content">
                            {/* Изображение проекта */}
                            <img
                                src={project.imgBig}
                                alt={project.title}
                                className="project-details__cover"
                            />

                            {/* Описание проекта */}
                            <div className="project-details__desc">
                                {/* Даты проведения */}
                                <p><strong>Даты проведения: </strong> {project.date}</p>

                                {/* Описание практики */}
                                <p><strong>О практике: </strong> {project.description}</p>

                                {/* Университет */}
                                <p>
                                    <strong>Университет: </strong>
                                    <a href={project.link_university} target="_blank" rel="noopener noreferrer">
                                        {project.university}
                                    </a>
                                </p>

                                {/* Компания */}
                                <p>
                                    <strong>Компания: </strong>
                                    <a href={project.link_company} target="_blank" rel="noopener noreferrer">
                                        {project.company}
                                    </a>
                                </p>

                                {/* Зарплата */}
                                <p><strong>Зарплата: </strong> {project.salary} рублей/мес</p>

                                {/* Время занятости */}
                                <p><strong>Время занятости: </strong> {project.employmentType}</p>

                                {/* Требуемое образование */}
                                <p><strong>Требуемое образование: </strong> {project.education}</p>

                                {/* Формат стажировки */}
                                <p><strong>Формат стажировки: </strong> {project.internshipFormat}</p>

                                {/* Количество мест */}
                                <p><strong>Количество мест: </strong> {project.places}</p>
                            </div>
                        </div>

                        {/* Кнопка "Зарегистрироваться на практику" */}
                        <button className="btn btn-primary">Зарегистрироваться на практику</button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Project;