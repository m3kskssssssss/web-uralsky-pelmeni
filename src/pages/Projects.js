import { Link } from "react-router-dom"; // Импортируйте Link для маршрутизации
import { projects } from "../helpers/projectList";
import "./style.css";

const Projects = () => {
    return ( 
    <main className="section">
    <div className="container">
        <h2 className="title-1">Доступные практики:</h2>
        <ul className="projects">
            {projects.map((project, index) => {
                return (
                    <li key={index}>
                        <Link to={`/project/${index}`}> {/* Добавьте ссылку на проект с его индексом */}
                            <div className="project">
                                <h1 className="title-2">{project.title}</h1>
                                <img src={project.img} alt={project.title} />
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </div>
</main> );
}

export default Projects;