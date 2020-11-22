import React from 'react'
import Header from './Header'
import Writing from './Writing'

const Layout = (data) => {
   
 return ( 
    <div className="container">
         <Header />
         <Writing {...data} />
         <h1> FOOTER </h1>
    </div>
 )
}

export default Layout