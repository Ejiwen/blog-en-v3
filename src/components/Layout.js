import React from 'react'
import Header from './Header'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'


const Layout = ({children}) => {
 return (
    <Container fluid>
         <Header />
         <p> {children} </p>
         <h1> FOOTER </h1>
         </Container>
 )
}

export default Layout