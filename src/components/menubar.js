import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Menubar = ({ menubar }) => {
  return (
    <Menu menubar={menubar}>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/projects">Projects</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/blog">Blog</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </Menu>
  )
}

const Menu = styled.div`
  position: fixed;
  top: 4.9rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#2f3676, #744c9e);
  z-index: 100;
  width: ${props => (!props.menubar ? "0" : "100vw")};
  height: 100%;
  overflow: hidden;
  transition: 0.4s ease;
  padding: 2rem 0;
  @media (min-width: 600px) {
    display: none;
  }
`
const MenuLink = styled(Link)`
  color: white;
  margin: 1rem;
  padding-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  border-left: 1px solid white;
  text-decoration: none;
  text-shadow: 1px 1px 3px black;
  &::before {
  }
`

export default Menubar
