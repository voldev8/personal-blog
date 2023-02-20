import React from "react"
import styled, { keyframes } from "styled-components"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = props => {
  const { title, children } = props
  let header = (
    <h2
      style={{
        marginBottom: `1.5rem`,
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
          maxWidth: `44rem`,
          padding: `1.5rem`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
      </div>
      <Footer />
    </Wrapper>
  )
}

const slideIn = keyframes`
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
`
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    opacity: 0;
    animation: ${slideIn} ease 1s forwards;
    -webkit-animation: ${slideIn} ease 1s forwards;
  }
`

export default Layout
