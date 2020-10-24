import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
   return (
       <header>
       <div>LOGO</div>
       <nav>
           <ul>
               <li>Home</li>
               <li>Writing</li>
               <li>Work</li>
               <li>Résumé</li>
               <li>Contact</li>
           </ul>
       </nav>
       <div className="cnt-social-media">
       <FontAwesomeIcon icon={faLinkedin} size="lg" />
       <FontAwesomeIcon icon={faGithubSquare} size="lg"  />
       <FontAwesomeIcon icon={faDev} size="lg"  />
       </div>
       <img src="./images/header.svg" height="500px" width="500px" />
       </header> 
   )
}

export default Header;