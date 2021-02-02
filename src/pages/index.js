import React from "react";
import Layout from "../components/Layout";
import "../style/style.css";
import { graphql } from 'gatsby';


export default function Home({data}) {
  return (<Layout {...data}></Layout>)
}


export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
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
