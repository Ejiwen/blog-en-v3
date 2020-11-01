import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDev, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'

const Header = () => {
   return (
    <Container>
  <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar></Container>
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