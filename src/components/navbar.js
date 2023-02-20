import React, { useState } from "react"
import Menubar from "./menubar"
import { Link } from "gatsby"
import styled from "styled-components"

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
        <BurgerMenu onClick={handleClick}>
          {!menubar ? (
            <svg viewBox="0 0 100 60" width="40" height="40" fill="#744c9e">
              <rect width="100" height="15" rx="6"></rect>
              <rect y="25" width="100" height="15" rx="6"></rect>
              <rect y="50" width="100" height="15" rx="6"></rect>
            </svg>
          ) : (
            <svg viewBox="0 0 100 60" width="40" height="40" fill="#744c9e">
              <line
                x1="20"
                y1="60"
                x2="80"
                y2="10"
                stroke="#2f3676"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <line
                x1="20"
                y1="10"
                x2="80"
                y2="60"
                stroke="#2f3676"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </svg>
          )}
        </BurgerMenu>
      </Nav>
      {menubar && <Menubar />}
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
    text-shadow: 0 0 20px black;
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
const BurgerMenu = styled.div`
  align-self: center;
  margin-right: 1rem;
  display: none;
  transition: all 1s;
  @media (max-width: 600px) {
    display: flex;
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
