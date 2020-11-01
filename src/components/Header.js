import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



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
    {/* <div className="cnt-social-media">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
    <FontAwesomeIcon icon={faGithubSquare} size="lg"  />
    <FontAwesomeIcon icon={faDev} size="lg"  />
    </div> */}
    </header> 
   )
}

export default Header;



/*

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
       </header> 

*/