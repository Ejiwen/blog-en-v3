import React, { useState, useEffect, useRef } from "react"
import anime from "animejs"
import {
  faCheckDouble,
  faCircle,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProjectTmpl(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderStatus, setSliderStatus] = useState(true)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    var delay = 3500
    sliderStatus ? (delay = 3500) : (delay = 9999999)

    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide(prevIndex =>
          prevIndex === props.projectList.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
      const animeSlide = () => {
        anime({
          targets: ".project_thumbnail",
          scale: [0.5, 1],
          duration: 2500,
        })

        anime({
          targets: ".slider__info",
          opacity: [0, 1],
          translateX: [40, 0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 2500,
          offset: "-=600",
        })
      }
      animeSlide()
    }
  }, [currentSlide, sliderStatus])

  return (
    <div className="projetTmpl">
      <div
        style={{
          width: "200px",
          margin: "auto",
          color: "#191818",
          cursor: "pointer",
        }}
      >
        {props.projectList.map(elm => {
          return (
            <span
              className={elm.index === currentSlide ? "active" : ""}
              onClick={() => {
                setCurrentSlide(elm.index)
              }}
            >
              <FontAwesomeIcon
                onClick={() => setSliderStatus(false)}
                style={{ margin: "5px" }}
                icon={faCircle}
              />
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
              <p className="dev_tools">DEVELOPMENT TOOLS</p>
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
            className="project_thumbnail"
            src={props.projectList[currentSlide].pic}
            max-height="365px"
            alt="picture"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectTmpl
