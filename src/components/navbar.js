import React, { useState } from "react"
import Menubar from "./menubar"
import { Link } from "gatsby"
import styled, { StyleSheetManager } from "styled-components"

const Navbar = () => {
  const [menubar, setMenubar] = useState(false)
  const handleClick = () => {
    setMenubar(!menubar)
  }
  return (
    <>
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
        <BurgerMenu htmlFor="navi-toggle" onClick={handleClick}>
          <StyleSheetManager shouldForwardProp={prop => prop !== "clicked"}>
            <Icon clicked={menubar}>&nbsp;</Icon>
          </StyleSheetManager>
        </BurgerMenu>
      </Nav>
      <StyleSheetManager shouldForwardProp={prop => prop !== "menubar"}>
        <Menubar menubar={menubar} />
      </StyleSheetManager>
    </>
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
  @media (max-width: 600px) {
    position: fixed;
    width: 100%;
    z-index: 1000;
    margin: 0;
    background-color: rgb(255, 255, 255);
  }
  h1 {
    margin: 0;
    padding: 0 1rem;
    line-height: 3rem;
    background: linear-gradient(#2f3676, #744c9e);
    background-clip: text;
    -webkit-background-clip: text;
    /* not recommended */
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    align-self: center;
    color: rgb(0, 0, 0);
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  h1 span {
    bottom: 0;
    right: 0;
    cursor: default;
  }
  h1 span:hover {
    position: relative;
    bottom: 4px;
    right: 1px;
    text-shadow: 0 0 20px rgb(0, 0, 0);
    -webkit-text-fill-color: #2f3676;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
    @media (max-width: 600px) {
      display: none;
    }
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

const BurgerMenu = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
  @media (min-width: 600px) {
    display: none;
  }
`
const Icon = styled.span`
  position: relative;
  background-color: ${props => (props.clicked ? "transparent" : "#744c9e")};
  width: 2rem;
  height: 6px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: #2f3676;
    width: 2rem;
    height: 6px;
    border-radius: 8px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${props => (props.clicked ? "0" : "-0.8rem")};
    transform: ${props => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${props => (props.clicked ? "0" : "0.8rem")};
    transform: ${props => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`

export default Navbar
