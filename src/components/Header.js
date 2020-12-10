import { Link } from 'gatsby'
import React from 'react'
import logo from "../../static/images/logoV2-top.svg"

const Header = () => {
   return (
    <header>

       <div className="navbar">
       <nav>
       <div className="logo-header"><img src={logo} /></div>
           <ul>
               <li>Home</li>
               <li> <Link to="/PostPage">Blog</Link></li>
               <li>Work</li>
               <li>Résumé</li>
               <li>  Contact </li>
           </ul>
       </nav>
       </div>

       <div className="my-bio-container">
       <div className="my-bio">
           <div>
           <p> Hi, My name is </p>
           <h3>CHEIKHANY EJIWEN</h3>
           <p className="my-bio--role">Freelance Web Developer in san francisco</p>
           </div>
       </div>
       </div>
       
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