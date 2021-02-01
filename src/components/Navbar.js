import { Link } from 'gatsby'
import React from 'react'
import logo from "../../static/images/logoV2-top.svg"

const Navbar = () => {
    return (
        
           <nav className="navigation">
               <img src={logo} width="100px" /> 
               <input type="checkbox" className="navigation__checkbox" id="checkLabel" />
               <label className="navigation__label" for="checkLabel">
                   <span className="navigation__icon">&nbsp;</span>
                </label>

               <div className="navigation__bg"></div>

            
            <div className="navigation__menu">
                {/* <img src={logo} /> */}
               
                <ul className="navigation__list">
                    <li className="navigation__item"><Link className="navigation__link" to="/">Home</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to="/">About</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to="/PostPage">Blog</Link></li>
                    <li className="navigation__item"><Link className="navigation__link" to="#Experiencesy">Experience</Link> </li>
                    <li className="navigation__item"><Link className="navigation__link" to="#worky">Work</Link></li> 
                    <li className="navigation__item"><Link className="navigation__link" to="#worky">Contact</Link></li>
                </ul>
             </div>
            </nav> 
        
    )
}

export default Navbar
