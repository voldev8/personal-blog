import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header = (
      <h2
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: `#744c9e`,
          textShadow: `1px 1px 4px rgba(0,0,0,0.3)`,
        }}
      >
        {title}
      </h2>
    )
    return (
      <Wrapper>
        <Navbar />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    opacity: 0;
    animation: fadeUp ease 1s forwards;
    -webkit-animation: fadeUp ease 1s forwards;
  }
  /* fade-up Animation */

  @keyframes fadeUp {
    0% {
      transform: translate3d(-2rem, 0, 0);
    }

    75% {
      transform: translate3d(4px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeUp {
    0% {
      transform: translate3d(-2rem, 0, 0);
    }

    75% {
      transform: translate3d(4px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
