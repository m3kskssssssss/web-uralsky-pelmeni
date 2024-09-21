import { Link } from "react-router-dom";
import { projects } from "../helpers/projectList";
import Search from "./Search";
import Filters from "./Filters"; // Импортируйте компонент фильтров
import { useState } from "react";
import "./style.css";
import "./Projects.css";
import "./Filters.css";

const Projects = () => {
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();
        const filtered = projects.filter(project =>
            project.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredProjects(filtered);
    };

    const handleFilter = (filters) => {
        const { industry, specialty, salary, employmentType, education, internshipFormat } = filters;

        const filtered = projects.filter(project => {
            return (
                (!industry || project.industry === industry) &&
                (!specialty || project.specialty === specialty) &&
                (!salary || (salary === "0" ? project.salary === 0 : project.salary >= salary)) &&
                (!employmentType || project.employmentType === employmentType) &&
                (!education || project.education === education) &&
                (!internshipFormat || project.internshipFormat === internshipFormat)
            );
        });

        setFilteredProjects(filtered);
    };

    return (
        <main className="section">
            <div className="container">

                <div className="search-filters-container filter-container">
                    <Search onSearch={handleSearch} />
                    <Filters onFilter={handleFilter} />
                </div>
                <ul className="projects">
                    {filteredProjects.map((project, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/project/${index}`}>
                                    <div className="project">
                                        <img src={project.img} alt={project.title}/>
                                        <h1 className="title-2">{project.name}</h1>
                                        <h1 className="title-2">От {project.company}</h1>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
