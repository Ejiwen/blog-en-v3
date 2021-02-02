import React from "react"
// import styles from "../css/postTemplate.module.css"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid
  console.log(body)

  return (
    <div>
      <section>
        <Link to="/">
          back to all posts
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={img} />
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </div>
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