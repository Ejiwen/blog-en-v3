import React from 'react';
import { graphql } from 'gatsby'

const Writing = ({data}) => {
    console.log(data);
    return(
        <div className="writing">
            test
            <img src="images/writing1.svg" />
            <div>

            </div>
        </div>
    )
}


export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 2) {
      nodes {
        excerpt
        frontmatter {
          author
          date(fromNow: true)
          slug
          title
          category
          readTime
          
        }
      }
    }
  }
`

export default Writing;