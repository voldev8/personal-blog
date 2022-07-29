import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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
      <SEO title="Blog" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.fields.slug}>
              <h3
                style={{
                  marginBottom: `1rem`,
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/blog${post.fields.slug}`}
                >
                  {title}
                </Link>
              </h3>
              {/* <small>{post.frontmatter.date}</small> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
      <Link to="/">
        <Button marginTop="35px">Go Home</Button>
      </Link>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
