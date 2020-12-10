import React from 'react'
import {Link} from 'gatsby'
import Post from '../components/Post'
import Footer from '../components/Footer'
import logo from "../../static/images/logoV2-top.svg"

function PostPage({data}) {
    const {allMdx:{nodes}} = data;
    return (
        <div>
            <header>
            <div className="navbar">
       <nav>
       <div className="logo-header"><img src={logo} /></div>
           <ul>
               <li><Link to="/">Home</Link></li>
               <li> <Link to="/PostPage">Blog</Link></li>
               <li>Work</li>
               <li>Résumé</li>
               <li>  Contact </li>
           </ul>
       </nav>
       </div>
        </header>
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