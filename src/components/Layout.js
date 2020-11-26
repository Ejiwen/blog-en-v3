import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Writing from './Writing'

const Layout = (data) => {
   
 return ( 
    <div className="page-container">
         <Header />
         <Writing {...data} />
         <Footer />
    </div>
 )
}

export default Layout