import React from 'react'
import Post from './Post'

const Writing = ({allMdx:{nodes}}) => {
  
    console.log("-----------");
    console.log(nodes);
    console.log("-----------");
    return(
        <div className="wrap-writing">
        <div className="top-bg-writing"> </div>
        <div className="writing">
            <img src="images/writing1.svg" />   
             {
             nodes.map(post => <Post key={post.id} {...post} />)
             }
        </div>
        </div>
    )
}



export default Writing;