import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="logo-footer"> LOGO FOOTER</div>
            <div className="follow-me"> FOLLOW ME </div>

            <div className="contact-me">
            <form className="contact-me__form">
            <input type="text" placeholder="NAME" />
            <input  type="email" placeholder="E-MAIL" />
            <textarea id="message" type="text" placeholder="MESSAGE" rows="4" cols="50"></textarea>
            <input id="submit" type="submit" value="GO!" />
            </form>
            </div>

        </footer>
    )
}

export default Footer;