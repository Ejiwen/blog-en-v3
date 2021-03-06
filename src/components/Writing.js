import React from 'react'
import Post from './Post'
import headerWriting from "../../static/images/writingBg.svg"

const Writing = ({allMdx:{nodes}}) => {
  
    console.log("-----------");
    console.log(nodes);
    console.log("-----------");
    return(
        <div className="wrap-writing">
        
        <div className="writing">
        <div className="writing__header">
            <img src={headerWriting} /><h3> Recent Posts </h3>
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