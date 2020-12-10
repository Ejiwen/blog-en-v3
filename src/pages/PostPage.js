import React from 'react'
import Post from '../components/Post'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from '@emotion/styled'

const BlogPosts = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: auto;
color: black;
flex-wrap: wrap;
`

function PostPage({data}) {
    const {allMdx:{nodes}} = data;
    return (
        <div>
            <Navbar />
        <div className="wrap-writing">
        <div className="top-bg-writing"> </div>
        <div className="writing">
            {/* <img src="images/writing1.svg" />    */}
            
             {
             nodes.map(post => <Post key={post.id} {...post} />)
             }
            
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default PostPage


export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        excerpt
        frontmatter {
          author
          date(fromNow: true)
          slug
          title
          category
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`