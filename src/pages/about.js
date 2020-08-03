import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout title={"About"}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <p>About</p>
    </Layout>
  )
}

export default About
