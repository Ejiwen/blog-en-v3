import React from "react"
import Image from "gatsby-image"

const Post = ({ excerpt, frontmatter }) => {
  const { category, readTime, image, title } = frontmatter
  return (

      <div className="post-body">
        <div className="post-content">
          <div className="post-pic">
            <Image fluid={image.childImageSharp.fluid} style={{position: "static"}} />
            <svg className="card__svg" viewBox="0 0 800 500">
              <path
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                stroke="transparent"
                fill="#E2E2E2"
              ></path>
              <path
                class="card__line"
                d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                stroke="pink"
                stroke-width="3"
                fill="transparent"
              ></path>
            </svg>
          </div>

          <div className="post-info">
            <h3 className="post-info-title">{title} </h3>
            <p className="post-info-intro">{excerpt}</p>
            <div className="post-info-tags">
            <span>{category}</span> <span>{readTime}</span>
            
            </div>
          </div>
        </div>
      </div>

  )
}

export default Post