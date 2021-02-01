import React from 'react'
import Navbar from './Navbar'
import styled from '@emotion/styled'
import {bgHeader} from "../../static/images/header-mr-sf.svg"

const HeaderBttomBg = styled.div`
background:url('https://assets-global.website-files.com/5eb2825fc062423a537b975c/5eb2825fc06242394c7b9980_mask.svg') no-repeat;
background-size: cover;
height: 36px;
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
           <p className="my-bio--role">Freelance Web Developer in san francisco</p>
           </div>
       </div>
       </div>
       <img src={bgHeader} style={{visibility: "hidden", height:"400px"}} />
       <HeaderBttomBg></HeaderBttomBg>
    </header>

   )
}

export default Header;

/*
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
       import { faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
       <div className="cnt-social-media">
       <FontAwesomeIcon icon={faLinkedin} size="lg" />
       <FontAwesomeIcon icon={faGithubSquare} size="lg"  />
       <FontAwesomeIcon icon={faDev} size="lg"  />

 */