import React, { useState, useEffect, useRef } from "react"
import anime from "animejs"
import { faCheckDouble, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProjectTmpl(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide(prevIndex =>
          prevIndex === props.projectList.length - 1 ? 0 : prevIndex + 1
        ),
      3500
    )

    return () => {
      resetTimeout()
      const animeSlide = () => {
        anime({
          targets: ".projetTmpl__slider",
          scale: [0.5, 1],
          duration: 2000,
        })
      }
      animeSlide();
    }




  }, [currentSlide])



  return (
    <div className="projetTmpl">
      <div style={{ width: "200px", margin: "auto", color: "#191818" }}>
        {props.projectList.map(elm => {
          return (
            <span
              className={elm.index === currentSlide ? "active" : ""}
              onClick={() => {
                setCurrentSlide(elm.index)
              }}
            >
              <FontAwesomeIcon style={{ margin: "5px" }} icon={faCircle} />
            </span>
          )
        })}
      </div>

      <div className="projetTmpl__slider">
        <div className="slider__info">
          <div className="slider__info__logo">
            <a
              href={props.projectList[currentSlide].linkProject}
              target="_blank"
            >
              <img
                src={props.projectList[currentSlide].logo}
                height="100px"
                alt="picture"
              />
            </a>
          </div>
          <div className="slider__info__description">
            {props.projectList[currentSlide].desc}
            <div className="slider__info__description__tools">
              <p>DEVELOPMENT TOOLS</p>
              <ul>
                {props.projectList[currentSlide].tools.map(elm => (
                  <li>
                    <FontAwesomeIcon icon={faCheckDouble} />
                    {elm}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <img
            src={props.projectList[currentSlide].pic}
            height="365px"
            alt="picture"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectTmpl
