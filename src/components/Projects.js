import React from 'react'
import mnticImg from "../../static/images/mnticProject.svg"
import irbehImg from "../../static/images/irbehProject.svg"
import ProjectTmpl from './parts/ProjectTmpl'
import {MNTIC, IRBEH} from './parts/ProjetDisc'

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
    
    return (
        <div className="projects-wrap">
            <div className="projects">
            <div className="projects__header">
            <h3> Experiences </h3>
            </div>
            
            <div className="projects__body">
            {
                projectList.map(proj => {
                     return <ProjectTmpl {...proj} />
                })
            }
            </div>
        </div>
        </div>
    )
}

export default Projects;
