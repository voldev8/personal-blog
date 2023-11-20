import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import styled from "styled-components"

import "prismjs/themes/prism-tomorrow.css"

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={"A blog"}>
      <Seo
        title="Blog"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `python`]}
      />
      <Bio />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.fields.slug}>
              <BlogHeader>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/blog${post.fields.slug}`}
                >
                  {title}
                </Link>
              </BlogHeader>
              <p
                style={{ paddingLeft: `1rem` }}
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
      <div
        style={{ display: `flex`, justifyContent: `center`, padding: `2rem 0` }}
      >
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </Layout>
  )
}

const BlogHeader = styled.h3`
  border-bottom: 1px solid #e64d3f;
  padding: 0 0.5rem;
  color: #005b99;
  width: max-content;
  transition: 0.6s;
  &:hover {
    opacity: 0.8;
    color: #e64d3f;
    border-bottom: 1px solid #005b99;
  }
`

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
