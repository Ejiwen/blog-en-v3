import React from 'react'

const Header = () => {
   return (
    <header>

       <div className="navbar">
       <nav>
       <div className="logo-header">LOGO</div>
           <ul>
               <li>Home</li>
               <li>Writing</li>
               <li>Work</li>
               <li>Résumé</li>
               <li>Contact</li>
           </ul>
       </nav>
       </div>

       <div className="my-bio-container">
       <div className="my-bio">
           <p> Hi, My name is </p>
           <h3>CHEIKHANY EJIWEN</h3>
           <p>Freelance Web Developer in san francisco</p>
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