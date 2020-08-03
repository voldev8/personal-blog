import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav as="nav">
      <h1>
        <span>V</span>
        <span>o</span>
        <span>l</span>
        <span>k</span>
        <span>a</span>
        <span>n</span>
        <span> </span>
        <span>U</span>
        <span>y</span>
        <span>a</span>
        <span>r</span>
        <span>e</span>
        <span>r</span>
      </h1>
      <ul>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </ul>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100wv;
  height: 5rem;
  margin: 0 1rem;
  color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(47, 54, 118, 0.5);

  h1 {
    margin: 0;
    padding: 0 1rem;
    background: linear-gradient(#2f3676, #744c9e);
    background-clip: text;
    -webkit-background-clip: text;
    /* not recommended */
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    align-self: center;
    color: black;
  }
  h1 span {
    bottom: 0;
    right: 0;
    /* transition: all 0.2s; */
    cursor: default;
  }
  h1 span:hover {
    position: relative;
    bottom: 4px;
    right: 1px;
    text-shadow: 0 0 20px black;
    -webkit-text-fill-color: #2f3676;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`

const StyledLink = styled(Link)`
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #744c9e;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  box-shadow: none;
  transition: 1s;
  position: relative;

  &:after {
    content: "";
    display: block;
    border-bottom: 1px solid #744c9e;
    width: 0;
    position: absolute;
    left: 0;
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
  }

  &:hover:after,
  &:focus:after {
    width: 100%;
  }
`

export default Navbar
