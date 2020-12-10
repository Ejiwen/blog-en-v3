import React, { useState } from 'react'
import mnticImg from "../../static/images/mnticProject.svg"
import irbehImg from "../../static/images/irbehProject.svg"
import ProjectTmpl from './parts/ProjectTmpl'
import {MNTIC, IRBEH} from './parts/ProjetDisc'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {

    const projectList = [
        {
            name: "MNTIC",
            desc: MNTIC,
            pic: mnticImg
        },
        {
            name: "IRBEH",
            desc: IRBEH,
            pic: irbehImg
        }
    ]

    const [projDisplay, setProj] = useState(projectList[0])

    const nextProj = () => {
        projDisplay.name == "MNTIC" ? setProj(projectList[1]) : setProj(projectList[0]);
    }
    
    return (
        <div className="projects-wrap">
            <div className="projects">
            <div className="projects__header">
            <h3> Projects </h3>
            </div>
            
            <div className="projects__body">
            <FontAwesomeIcon className="iconSlider" onClick={() => nextProj()} icon={faChevronLeft} size="2x" />
            <ProjectTmpl {...projDisplay} />
            <FontAwesomeIcon className="iconSlider" onClick={() => nextProj()} icon={faChevronRight} size="2x" />  
            
            </div>
        </div>
        </div>
    )
}

export default Projects;
