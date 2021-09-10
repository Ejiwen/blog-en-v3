import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

function ExperienceTmpl({ company, role, periode, experience }) {
  return (
    <div className="tmplExperience">
      <h3 className="tmplExperience__role">{role} </h3>
      <p className="tmplExperience__company">{company}</p>
      <span className="tmplExperience__periode">{periode}</span>
      <ul className="tmplExperience__list">
        {experience.map(task => {
          return (
            <li>
              {" "}
              <FontAwesomeIcon icon={faCheckDouble} /> {task}{" "}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExperienceTmpl
