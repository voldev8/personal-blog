import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import projects from "/static/projects.json"

const Projects = () => {
  return (
    <Layout title={"Projects"}>
      <Seo
        title="Projects"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {projects.map((project, i) => (
        <ProjectFrame key={i}>
          <Heading>
            <h3>{project.title}</h3>
            {project.github_link.map((link, i) => (
              <a href={link[0]} target="_blank" rel="noreferrer" key={i}>
                <img src="/github.png" alt="github" />
                <ToolTip>{link[1] ? link[1] : "Github Link"}</ToolTip>
              </a>
            ))}
          </Heading>
          <AppLink href={project.app_link} target="_blank" rel="noreferrer">
            <img
              style={{ margin: 0 }}
              src={project.app_img}
              alt={project.app_img_alt}
            />
            <span>View App</span>
          </AppLink>
          <AppInfo>
            <h4>About</h4>
            {project.app_description.map((para, i) => (
              <p key={i}>
                {para}
                <br />
              </p>
            ))}
            <h4>Tools used</h4>
            <ul>
              {project.tools.map((tool, i) => (
                <li key={i} style={{ marginLeft: `1rem` }}>
                  {tool}
                </li>
              ))}
            </ul>
          </AppInfo>
          {i !== projects.length - 1 && <hr style={{ margin: `1rem 0` }} />}
        </ProjectFrame>
      ))}
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
    margin-bottom: 1.5rem;
  }
`

const AppLink = styled.a`
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
  p,
  ul {
    margin: 0 auto;
    padding: 1rem;
    width: 90%;
    background-color: rgba(128, 0, 128, 0.05);
  }
`

export default Projects
