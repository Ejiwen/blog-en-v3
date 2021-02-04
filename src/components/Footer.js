import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithubSquare,  faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import logo from "../../static/images/logoV2-top.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer-right-div">     
            <div className="logo-footer"> <img src={logo} /> </div>
            <div className="follow-me"> 
            <a href="https://www.linkedin.com/in/ejiwen/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> 
            </a>
            <a href="https://github.com/Ejiwen" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" /> 
            </a>
            <a href="https://dev.to/ejiwen" target="_blank">
            <FontAwesomeIcon icon={faDev} size="2x" /> 
            </a>
            <a href="https://www.youtube.com/channel/UCFu08838dtH-xdNMZHmAY4w" target="_blank">
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
            </a> 
            {/* <FontAwesomeIcon icon={faTwitterSquare} size="2x" />  */}
            </div>
            </div>  

            <div className="contact-me">  
            <form className="contact-form" action="" method="post">
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
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