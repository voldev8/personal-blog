import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO
        title="Home"
        keywords={[`blog`, `developer`, `javascript`, `react`, `python`]}
      />
      <Header>
        Hey{" "}
        <WaveHand role="img" aria-label="wave emoji">
          👋
        </WaveHand>
        ,
        <Name>
          <br />I am
          <span
            style={{
              color: `#744c9e`,
              textShadow: `1px 1px 4px rgba(0,0,0,0.3)`,
            }}
          >
            {" "}
            Volkan
          </span>
          .
        </Name>
        <br />
        <Info>
          I am a full-stack <br /> web developer.
        </Info>
      </Header>
      <div
        style={{
          paddingTop: `3rem`,
          width: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <ProjectsLink to="/projects">
          <span>My projects</span>
        </ProjectsLink>
      </div>
    </Layout>
  )
}

const wave = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(16.0deg) } 
   20% { transform: rotate(-10.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
`
const appear = keyframes`
    0% { opacity: 0 }
  100% { opacity: 1 }
`
const slideUp = keyframes`
    0% {
      transform: translate3d(0, 2rem, 0);
    }

    75% {
      transform: translate3d(0, -12px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
`
const Header = styled.h1`
  line-height: 1.4;
  width: max-content;
`

const WaveHand = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: 3;
  transform-origin: 70% 70%;
  display: inline-block;
`
const Name = styled.span`
  opacity: 0;
  animation-name: ${appear};
  animation-delay: 1s;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
`
const Info = styled.span`
  line-height: 0.8;
  opacity: 0;
  animation-name: ${appear};
  animation-delay: 2s;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
`
const ProjectsLink = styled(Link)`
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: #744c9e;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #744c9e;
  cursor: pointer;
  overflow: hidden;

  opacity: 0;
  animation-name: ${slideUp};
  animation-delay: 0.5s;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;

  -webkit-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &&:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 2px;
    background: #744c9e;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }
  && > span {
    position: relative;
    display: block;
    padding: 6px 10px;
    color: inherit;
  }

  && > span:before,
  && > span:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #744c9e;
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  }
  && > span:before {
    height: 2px;
    width: 100%;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
  && > span:after {
    height: 100%;
    width: 2px;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &&:hover:after,
  &&:hover > span:before,
  &&:hover > span:after {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  &&:hover:after {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
  &&:hover > span:before {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  &&:hover > span:after {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }
  &&:hover {
    color: white;
    background-color: #744c9e;
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
  }
`

export default IndexPage
