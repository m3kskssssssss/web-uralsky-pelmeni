import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/04-big.jpg";

import { useParams } from "react-router-dom";
import {projects} from "./../helpers/projectList";

const Project = () => {

    const {id} = useParams();
    const project = projects[id];

    return (   
    <main className="section">
    <div className="container">
        {/* <div className="project-details">

            <h1 className="title-1">ПРАКТИКА</h1>

            <img src={img} alt="" className="project-details__cover" />

            <div className="project-details__desc">
                <p>Навыки: берем без опыта</p>
            </div>

            <BtnGitHub link="https://github.com"/>

    </div> */}
    </div>
</main>);
}

export default Project;