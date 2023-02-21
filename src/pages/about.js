import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const About = () => {
  return (
    <Layout title={"About"}>
      <SEO
        title="About me"
        keywords={[`blog`, `about`, `javascript`, `react`]}
      />
      <AboutPar>
        Hi there! Thank you for stopping by. This is Volkan, I am a self-taught
        web developer. My journey began when I printed out the words 'Hello
        World!'. This sparked my never-ending curiosity, so I began learning
        HTML, CSS and from there, moved to JavaScript. And I have not stopped
        ever since. I continue learning new technologies, languages and I really
        enjoy creating exciting and hopefully useful applications with that
        knowledge. I am really looking forward to apply all this knowledge and
        dedication to a professional setting.
      </AboutPar>
      <AboutPar>
        I live in Somerville, Massachusetts. When I am not coding, I am probably
        laughing with my wife, hiking mountains with beautiful views, playing
        video games with friends, or mountain biking.
      </AboutPar>
    </Layout>
  )
}

const AboutPar = styled.p`
  fontfamily: Ubuntu;
  text-indent: 2rem;
`

export default About
