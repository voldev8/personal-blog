import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ScrollButton from "../components/scrollButton"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Heading>{post.frontmatter.title}</Heading>

      <StyledSection
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />

      <hr
        style={{
          marginBottom: `1rem`,
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: `1rem`,
          marginTop: `1rem`,
        }}
      >
        <li>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          <Link to={`/blog`} rel="main">
            Main
          </Link>
        </li>
        <li>
          {next && (
            <Link to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      <ScrollButton />
    </Layout>
  )
}

const Heading = styled.h1`
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const StyledSection = styled.section`
  #table-of-contents {
    @media (max-width: 600px) {
      font-size: 1rem;
      margin-top: 1.4rem;
    }
  }
  ul {
    color: red;
    padding-left: 1.5rem;
    @media (max-width: 600px) {
      padding-left: 0.5rem;
    }
  }
  ul li p {
    @media (max-width: 600px) {
      display: inline;
    }
  }
  ul ul {
    padding-left: 0;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
  h2:not(#table-of-contents) {
    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h3 {
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  .gatsby-highlight {
    box-shadow: 2px 2px 8px #744c9e;
    max-width: 88vw;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
