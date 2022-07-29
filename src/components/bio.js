import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

// import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <Container>
      <BioImage>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </BioImage>
      {author?.name && (
        <p>
          A personal blog by <strong>{author.name}</strong>. <br />
          Developer, Lifelong Learner, Tech Enthusiast.
        </p>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0;
  }
`
const BioImage = styled.image`
  border-radius: 50%;
  overflow: hidden;
`

export default Bio
