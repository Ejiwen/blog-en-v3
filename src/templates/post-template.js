import React from "react"
// import styles from "../css/postTemplate.module.css"
import Layout from '../components/Layout'
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  background: papayawhip;
`;

const ArticleWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  margin: auto;
`;


const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid
  console.log(body)

  return (
    // <div>
    //   <section>
    //     <Link to="/">
    //       back to all posts
    //     </Link>
    //     <div>
    //       <h1>{title}</h1>
    //       <h4>
    //         <span>by {author}</span> / <span>{date}</span>
    //       </h4>
    //     </div>
    //     <Image fluid={img} />
    //     <div>
    //       <MDXRenderer>{body}</MDXRenderer>
    //     </div>
    //   </section>
    // </div>
    <Wrapper >
      <Navbar />
      <div className="top-bg-writing"> </div>
      <ArticleWrapper>
      <Title> {title} </Title>
      <div>  </div>
      <div>
        <MDXRenderer>{body}</MDXRenderer>
     </div>
        </ArticleWrapper>
      <Footer />
    </Wrapper >
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate