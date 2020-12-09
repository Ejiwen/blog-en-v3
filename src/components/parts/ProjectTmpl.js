import React from 'react'

function ProjectTmpl({name,pic, desc}) {
    return (
        <div className="projetTmpl">
            <div className="projetTmpl__description">
            <h3> {name} </h3>
            <p> {desc} </p>
            </div>
            <div className="projetTmpl__pic">
               <img src={pic} /> 
            </div>
           
           
        </div>
    )
}

export default ProjectTmpl
