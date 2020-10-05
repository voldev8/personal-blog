import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout title={"About"}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        praesentium in animi fugiat, aliquid corrupti voluptate fugit eaque quia
        dolorum earum esse est quasi officiis sapiente ipsum sed culpa sint!
      </p>
    </Layout>
  )
}

export default About
