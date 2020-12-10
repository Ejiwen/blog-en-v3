import React from 'react'
import Post from './Post'

const Writing = ({allMdx:{nodes}}) => {
  
    console.log("-----------");
    console.log(nodes);
    console.log("-----------");
    return(
        <div className="wrap-writing">
        {/* <div className="top-bg-writing"> </div> */}
        <div className="writing">
        <div className="writing__header">
            <h3> Recent Posts </h3>
            </div>
            <div className="writing__body">
            {/* <img src="images/writing1.svg" />    */}
             {
             nodes.map(post => <Post key={post.id} {...post} />)
             }
        </div>
        </div>
        </div>
    )
}



export default Writing;