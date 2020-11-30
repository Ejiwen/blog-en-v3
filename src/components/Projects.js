import React from 'react'
import mnticImg from "../../static/images/mntic-pc.png"

const Projects = () => {
    
    return (
        <div className="projects">
            RECENT PROJECTS
            <div className="project">
            <div className="project__body">
            <h3>MNTIC</h3>
            MNTIC has provided our clients with information, technology, and business solutions that address critical 
            challenges. Our collaborative approach fosters long-term relationships and trust, which allows us to develop
            strategic insights that maximize investments and competitive advantage.
         </div>
            
            <div className="project__img">
                <img src={mnticImg} />
            </div>
            </div>
            

        </div>
    )
}

export default Projects;
