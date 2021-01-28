import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout title={"Projects"}>
      <SEO
        title="Projects"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ProjectFrame>
        <Heading>
          <h3>Flavorites App</h3>
          <a
            href="https://github.com/voldev8/recipes-api"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./github.png" alt="github" />
            <ToolTip>Backend</ToolTip>
          </a>
          <a
            href="https://github.com/voldev8/recipes-client"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./github.png" alt="github" />
            <ToolTip>Frontend</ToolTip>
          </a>
        </Heading>
        <AppLink
          to="https://flavorites-voldev.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ margin: 0 }}
            src="./flavorites_screenshot.png"
            alt="Flavorites App"
          />
          <span>View App</span>
        </AppLink>
        <AppInfo>
          <h4>About</h4>
          <p>
            The Flavorites App gives users the option to browse a recipe catalog
            consisting of recipes created and shared by other fellow users.
            Recipes can be searched by name or tags. Each recipe card has two
            sides. On the front we have a picture, name, ingredients, and tags
            of the recipe. Single click will flip the card and show step-by-step
            instructions. Users also have the option to share a source link for
            additional information and instructions.
            <br />
            When signed in, users can create their own f(l)avorites list. They
            can add new recipes to the database; these recipes can be edited or
            removed only by the user who created them.
            <br />
            Resetting password is quite easy, users can click the forgot
            password link on login page. And they will receive an email with a
            reset-password link.
          </p>
          <h4>Languages used</h4>
          <p>
            <ul style={{ paddingLeft: `1rem` }}>
              <li>React</li>
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>Node.js</li>
            </ul>
          </p>
        </AppInfo>
        <hr style={{ margin: `1rem 0` }} />
      </ProjectFrame>
    </Layout>
  )
}

const ProjectFrame = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu", sans-serif;
`

const slideUp = keyframes`
    0% {
      margin-top: 2rem;
    }

    75% {
      margin-top: -6px;
    }
    100% {
      margin-top: 0;
      opacity: 1;
    }
`
const ToolTip = styled.span`
  visibility: hidden;
  background-color: #744c9e;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 12px;

  position: absolute;
  margin-bottom: 3.5rem;
  margin-left: 1.5rem;
  z-index: 1;
`

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;

  h3 {
    color: #003060;
    margin-left: 1%;
    margin-right: 1rem;
    text-decoration: underline;
  }
  a {
    display: flex;
    align-items: flex-end;
    margin-right: 1rem;
    &:hover ${ToolTip} {
      visibility: visible;
    }
  }
  img {
    height: 2rem;
    margin-bottom: 1.75rem;
  }
`

const AppLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;

  position: relative;
  float: left;
  overflow: hidden;
  width: 90%;
  background-color: rgb(116, 76, 158);
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.55);

  img {
    transition: all 0.6s 0.2s;
    width: 100%;
    height: auto;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.4rem;
    color: white;
    transform: translate(-50%, -50%);
    opacity: 0;
    background-color: rgba(116, 76, 158, 0.9);
    padding: 1rem 2rem;
    transition: opacity 0.6s 0.4s, box-shadow 0.2s;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.15);
  }

  &&:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
  }

  &&:hover img {
    opacity: 0.4;
    filter: grayscale(50%);
  }

  &&:hover span {
    animation-name: ${slideUp};
    animation-delay: 0.5s;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }

  span:hover {
    box-shadow: 3px 3px rgba(0, 0, 0, 0.45);
  }
`

const AppInfo = styled.article`
  h4 {
    color: #003060;
    margin-left: 3%;
    text-decoration: underline;
  }
  p {
    margin: 0 auto;
    width: 90%;
    padding: 1rem;
    background-color: rgba(128, 0, 128, 0.05);
  }
`

export default Projects
