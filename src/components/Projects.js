import React, { useState, useEffect } from 'react'
import mnticImg from "../../static/images/mnticProject.svg"
import irbehImg from "../../static/images/irbehProject.svg"
import ProjectTmpl from './parts/ProjectTmpl'
import {MNTIC, IRBEH} from './parts/ProjetDisc'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerWorks from "../../static/images/workBg.svg"

const Projects = () => {

    const projectList = [
        {
            name: "MNTIC",
            desc: MNTIC,
            linkProject: "http://mntic.fr/",
            pic: mnticImg,
            classN: "mnticCls"
        },
        {
            name: "IRBEH",
            desc: IRBEH,
            linkProject: "https://irbeh.com/",
            pic: irbehImg,
            classN: "irbehCls"
        }
    ]

    const [projDisplay, setProj] = useState(projectList[0])

    const nextProj = () => {
        projDisplay.name == "MNTIC" ? setProj(projectList[1]) : setProj(projectList[0]);
    }

    
    return (
        <div id="worky" className="projects-wrap">
            <div className="projects">
            <div className="projects__header">
            <img src={headerWorks} /><h3> Recent Works </h3>
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
