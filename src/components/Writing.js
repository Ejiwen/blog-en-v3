import React from 'react'
import Post from './Post'

const Writing = ({allMdx:{nodes}}) => {
  
    console.log("-----------");
    console.log(nodes);
    console.log("-----------");
    return(
        <div className="writing">
            <img src="images/writing1.svg" />   
             {
             nodes.map(m => <Post key={m.id} info={m.excerpt} />)
             }
        </div>
    )
}



export default Writing;