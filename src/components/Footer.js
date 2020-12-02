import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithubSquare,  faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import logo from "../../static/images/logoV2.svg"

const Footer = () => {
    return (
        <footer>

            <div className="logo-footer"> <img src={logo} /> </div>
            <div className="follow-me"> 
            <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
            <FontAwesomeIcon icon={faGithubSquare} size="2x" /> 
            <FontAwesomeIcon icon={faDev} size="2x" /> 
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" /> 
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" /> 
            </div>

            <div className="contact-me">  
            <form className="contact-form" action="" method="post">
                <h3>Quick Contact</h3>
                
                <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                </fieldset>
                <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required />
                </fieldset>
                
               
                <fieldset>
                <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
</div>

        </footer>
    )
}

export default Footer;


// <div className="contact-me">
//             <form className="contact-me__form">
//             <input type="text" placeholder="NAME" />
//             <input  type="email" placeholder="E-MAIL" />
//             <textarea id="message" type="text" placeholder="MESSAGE" rows="4" cols="50"></textarea>
//             <input id="submit" type="submit" value="GO!" />
//             </form>
//             </div>