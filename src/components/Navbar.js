import { Link } from 'gatsby'
import React from 'react'
import logo from "../../static/images/logoV2-top.svg"

const Navbar = () => {
    return (
        <div>
           <div className="navbar">
            <nav>
            <div className="logo-header"><img src={logo} /></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/PostPage">Blog</Link></li>
                    <li>Work</li>
                    <li>Résumé</li>
                    <li>  Contact </li>
                </ul>
            </nav>
            </div> 
        </div>
    )
}

export default Navbar
