import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import {
  faCss3,
  faDocker,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import DjangoIcon from "../images/django.svg"
import NextjsIcon from "../images/nextjs.svg"
import TypeScriptIcon from "../images/typescript.svg"

const Skills = () => {
  return (
    <Tools>
      <h3>
        Skills
        <i>
          <FontAwesomeIcon icon={faLaptopCode} />
        </i>
      </h3>
      <hr />
      <ul>
        <li>
          <i>
            <FontAwesomeIcon icon={faHtml5} />
          </i>
          HTML
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faCss3} />
          </i>
          CSS
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faJs} />
          </i>
          JavaScript
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faPython} />
          </i>
          Python
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faReact} />
          </i>
          React
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faDatabase} />
          </i>
          SQL
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faNode} />
          </i>
          Node.js
        </li>
        <li>
          <i>
            <DjangoIcon />
          </i>
          Django
        </li>
        <li>
          <i>
            <FontAwesomeIcon icon={faDocker} />
          </i>
          Docker
        </li>
        <li>
          <i>
            <TypeScriptIcon />
          </i>
          TypeScript
        </li>
        <li>
          <i>
            <NextjsIcon />
          </i>
          Next.js
        </li>
      </ul>
    </Tools>
  )
}

const Tools = styled.div`
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  h3 {
    color: #744c9e;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    i {
      color: #744c9e;
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 1rem; /* Adjust the gap between items as needed */
    list-style: none;
  }

  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0.5rem;
    margin: 1rem auto;
    height: 8rem;
    width: 8rem;
    border: 1px solid #2f3676;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  ul li i {
    padding: 0;
    margin: 0;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.4));
  }
  ul li i svg {
    align-self: center;
    height: 2rem;
    width: auto;
    padding: 0 4px;
    margin: 0;
    color: #744c9e;
  }
`

export default Skills
