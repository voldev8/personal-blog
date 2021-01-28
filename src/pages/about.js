import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout title={"About"}>
      <SEO title="About me" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <p>
        Hi! I'm Volkan. I started coding in 2015 by printing out the words 'Hello World!'. I got hooked so I began my journey with HTML, CSS and from there, moved to JavaScript. 
        And I have not stopped ever since. I continue learning new technologies, languages and really enjoy creating exciting and hopefully useful things with that knowledge.
        <br />
        I live in Somerville, MA in the U.S. When I am not coding, I am probably 
        laughing with my wife, hiking a mountain with a cool view, playing video games with my friends, 
        or just biking around.   
      </p>
    </Layout>
  )
}

export default About
