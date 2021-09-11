import React, { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import ProjectTmpl from "./parts/ProjectTmpl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import headerWorks from "../../static/images/workBg.svg"

const Projects = () => {
  const projectList = [
    {
      index: 0,
      name: "MNTIC",
      desc:
        "MNTIC is a french tech company creates and delivers information and technology.",
      linkProject:
        "https://web.archive.org/web/20210315032414/http://mntic.fr/",
      pic: "images/mnticProject.svg",
      logo: "images/mnticLogo.svg",
      tools: ["Wordpress", "JavaScript", "GreenSock", "Figma", "Inkscape"],
    },
    {
      index: 1,
      name: "IRBEH",
      desc:
        "IRBEH is an e-commerce mauritanian website  offering a whole range of products for the users",
      linkProject: "https://irbeh.com/",
      pic: "images/irbehProject.svg",
      logo: "images/IrbehLogo.svg",
      tools: ["Wordpress", "PHP", "React", "Figma", "Inkscape"],
    },
    {
      index: 2,
      name: "My Portofolio",
      desc:
        "I built my personal website to share my latest work and project. And also write blog posts about what fascinating me in tech.",
      linkProject: "https://cheikhanyejiwen.com/",
      pic: "images/blogScreenShot.svg",
      logo: "images/logoV2.svg",
      tools: ["React", "Gatsby", "GraphQL", "SCSS", "AnimeJS", "Inkscape"],
    },
  ]

  useEffect(() => {
    AOS.init()
  })

  return (
    <div id="worky" className="projects-wrap">
      <div className="projects">
        <div className="projects__header">
          <img src={headerWorks} />
          <h3> Recent Works </h3>
        </div>

        <div className="projects__body">
          {/*  data-aos="fade-right"  */}
          &nbsp;
          <ProjectTmpl projectList={projectList} />
          &nbsp;
        </div>
      </div>
    </div>
  )
}

export default Projects
// <h1 class="comingsoon"> COMING SOON </h1>
