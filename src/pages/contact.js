import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Particle from "../components/particle"

const Contact = () => {
  return (
    <Layout title={"Contact Form"}>
      <SEO
        title="Contact"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Particle />
      <ContactContainer>
        <Form
          action="https://getform.io/f/57036a36-2e5b-4bda-a1d4-f6e7ae0fd48d"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea name="message" cols="40" rows="10" required />
          <Button type="submit" width={`10rem`}>
            Send
            <i>
              <FontAwesomeIcon icon={faPaperPlane} />
            </i>
          </Button>
        </Form>
      </ContactContainer>
    </Layout>
  )
}

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 36rem;
  width: 44rem;
  margin: 4rem 0;
  border: 1px solid rgba(47, 54, 118, 0.5);
  box-shadow: 4px 4px 12px rgba(47, 54, 118, 0.3);
  &:hover {
    box-shadow: 8px 8px 12px rgba(47, 54, 118, 0.3);
  }
  background-color: #fff;
  @media (max-width: 650px) {
    width: 80vw;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem;
  @media (max-width: 650px) {
    padding: 1rem;
  }
  label {
    font-weight: 700;
    padding: 4px;
    color: #2f3676;
  }
  input,
  textarea {
    background-color: rgba(116, 76, 158, 0.1);
    font-size: 1rem;
    margin-bottom: 1.75rem;
    padding: 6px 6px;
    border: none;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
    @media (max-width: 650px) {
      font-size: 0.8rem;
      padding: 2px;
    }
  }
  textarea {
    resize: none;
  }
  button {
    i {
      z-index: -1;
      position: absolute;
      transform: translateX(60px);
      opacity: 0;
      -webkit-transition: all 0.25s cubic-bezier(0.14, 0.59, 1, 1.01) 0.1s;
      transition: all 0.15s cubic-bezier(0.14, 0.59, 1, 1.01) 0.1s;
      margin: 0;
    }
    &:hover i {
      z-index: 1;
      width: 15px;
      opacity: 1;
      transform: translateX(20px);
    }
    @media (max-width: 650px) {
      font-size: 0.8rem;
      padding: 2px 4px;
    }
  }
  @media (max-width: 650px) {
    width: 80vw;
  }
`
export default Contact
