import React from 'react'
import Header from './Header'
import Writing from './Writing'

const Layout = ({children}) => {
 return (
    <div>
         <Header />
         <p> {children} </p>
         <Writing />
         <h1> FOOTER </h1>
    </div>
 )
}

export default Layout