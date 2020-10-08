import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterDiv as="footer">
      <ul>
        <StyledLink
          to="https://www.linkedin.com/in/volkan-uyarer-8789851b8/"
          target="_blank"
        >
          <img src="./linkedin.png" alt="linkedin" />
        </StyledLink>
        <StyledLink to="https://github.com/voldev8" target="_blank">
          <img src="./github.png" alt="github" />
        </StyledLink>
        <StyledLink to="https://www.hackerrank.com/Voldev" target="_blank">
          <img src="./hackerrank.png" alt="hackerrank" />
        </StyledLink>
        <StyledLink
          to="https://www.codecademy.com/profiles/voldev"
          target="_blank"
          style={{ border: `1px solid navy` }}
        >
          <img src="./codec.png" alt="codecademy" />
        </StyledLink>
        <StyledLink to="https://www.freecodecamp.org/voldev" target="_blank">
          <img style={{ padding: `6px` }} src="./fcc.png" alt="freecodecamp" />
        </StyledLink>
      </ul>
      <Build>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Build>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100wv;
  height: 7rem;
  border-top: 1px solid #2f3676;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(47, 54, 118, 0.5);
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
  @media (max-width: 400px) {
    padding: 0.2rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    @media (max-width: 650px) {
      margin-left: 1rem;
    }
  }
`

const StyledLink = styled(Link)`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  box-shadow: none;
  @media (max-width: 600px) {
    margin: 0.5rem;
  }
  @media (max-width: 400px) {
    margin: 0.2rem;
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  img {
    height: 2.2rem;
    margin-bottom: 0;
    @media (max-width: 600px) {
      height: 1.4rem;
    }
  }
`

const Build = styled.div`
  color: #000;
  @media (max-width: 600px) {
    padding-right: 0.5rem;
    font-size: 0.6rem;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem;
  }
`

export default Footer
