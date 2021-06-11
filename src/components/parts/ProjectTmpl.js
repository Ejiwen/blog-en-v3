import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ProjectTmpl({name, desc, pic, linkProject, classN}) {

        // Update the document title using the browser API
        const picCls = `projetTmpl__pic ${classN}`;
        const descCls = `projetTmpl__description ${classN}`;
     
    return (
        <div className="projetTmpl" >
            
            <div className={descCls}>
            <a href={linkProject} target="_blank" ><h3> {name} </h3></a>
            <p> {desc} </p>
            </div>
            <div className={picCls}>
            <a href={linkProject} target="_blank" > <img src={pic} height="365px" /> </a>
            </div>
           
           
        </div>
    )
}

export default ProjectTmpl
