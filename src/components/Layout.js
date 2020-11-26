import React from 'react'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Writing from './Writing'

const Layout = (data) => {
   
 return ( 
    <div className="page-container">
         <Header />
         <Writing {...data} />
         <Experience />
         <Projects />
         <Footer />
    </div>
 )
}

export default Layout