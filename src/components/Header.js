import React from "react"
import Navbar from "./Navbar"
import styled from "@emotion/styled"
import { bgHeader } from "../../static/images/header-mr-sf.svg"

const HeaderBttomBg = styled.div`
  background: url("sectionmask3.svg") no-repeat;
  background-size: cover;
  height: 72px;
`

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="my-bio-container">
        <div className="my-bio">
          <div>
            <p> Hi, My name is </p>
            <h3>CHEIKHANY EJIWEN</h3>
            <p className="my-bio--role">Software Engineer in san francisco</p>
          </div>
        </div>
      </div>
      <img src={bgHeader} style={{ visibility: "hidden", height: "600px" }} />
      <HeaderBttomBg></HeaderBttomBg>
    </header>
  )
}

export default Header

/*
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
       import { faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
       <div className="cnt-social-media">
       <FontAwesomeIcon icon={faLinkedin} size="lg" />
       <FontAwesomeIcon icon={faGithubSquare} size="lg"  />
       <FontAwesomeIcon icon={faDev} size="lg"  />

 */
