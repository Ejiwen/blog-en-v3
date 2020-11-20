import React from 'react'
import Header from './Header'
import Writing from './Writing'

const Layout = (data) => {
   console.log("**************");
    console.log(data);
    console.log("**************");
 return ( 
    <div>
         <Header />
          <Writing {...data} />
         <h1> FOOTER </h1>
    </div>
 )
}

export default Layout