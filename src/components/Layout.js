import React from 'react'
import Header from './Header'


const Layout = ({children}) => {
 return (
     <div className="container">
         <Header />
         <p> {children} </p>
         <h1> FOOTER </h1>
     </div>
 )
}

export default Layout