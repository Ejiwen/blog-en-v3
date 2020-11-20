import React from 'react'

const Post = ({info}) => {
    // const { title,category } = frontmatter;
    //console.log(post);
return (
    <div >
    <div style={{border: "1px solid red", width:"30%"}}>{info}</div>
    </div>
)
}

export default Post;