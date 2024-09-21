import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectList";

const Project = () => {
    const { id } = useParams(); // Получаем id из параметров маршрута
    const project = projects[id]; // Получаем проект по id

    return (   
    <main className="section">
    <div className="container">
        {project && ( // Проверяем, существует ли проект
            <div className="project-details">
                <h2 className="title-1">{project.title}</h2> {/* Используем название проекта */}
                <img src={project.imgBig} alt={project.title} className="project-details__cover" /> {/* Используем большое изображение */}
                <div className="project-details__desc">
                    <p>{project.date}</p> {/* Используем даты проведения практики */}
                    <p>{project.description}</p> {/* Используем описание практики */}
                    <p>{project.industry}</p>
                </div>
                <BtnGitHub link={project.link}/> {/* Используем ссылку на GitHub */}
            </div>
        )}
    </div>
</main>);
}

export default Project;