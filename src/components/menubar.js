import React from "react"
import { StyledLink } from "./navbar"
import { Link } from "gatsby"
import styled from "styled-components"

const Menubar = () => {
  return (
    <Menu>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/blog">Blog</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </Menu>
  )
}

const Menu = styled(Link)`
  position: absolute;
  top: 4.9rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#2f3676, #744c9e);
  z-index: 100;
  width: 100vw;
`
const MenuLink = styled(Link)`
  color: white;
  padding: 1rem;
  border: none;
`

export default Menubar
