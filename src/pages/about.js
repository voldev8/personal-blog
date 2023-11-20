import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/skills"

const About = () => {
  return (
    <Layout title={"About"}>
      <Seo
        title="About me"
        keywords={[`blog`, `about`, `javascript`, `react`]}
      />
      <StyledImage>
        <StaticImage src="../images/about_me.jpg" alt="My Image" />
      </StyledImage>
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
      <Skills />
    </Layout>
  )
}

const StyledImage = styled.div`
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #2f3676;
`

const AboutPar = styled.p`
  fontfamily: Ubuntu;
  text-indent: 2rem;
`

export default About
