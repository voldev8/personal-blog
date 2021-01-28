import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styled from "styled-components"
import Particles from "react-particles-js"

const Contact = () => {
  return (
    <Layout title={"Contact Form"}>
      <SEO
        title="Contact"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Particles
        style={{
          position: `absolute`,
          top: `5rem`,
          left: `0`,
          padding: `0 0.5rem 7rem 0.5rem`,
          zIndex: `-1`,
        }}
        height="90vh"
        width="98vw"
        params={{
          particles: {
            color: {
              value: "#2f3676",
            },
            line_linked: {
              color: {
                value: "#2f3676",
              },
            },
            number: {
              value: 90,
            },
            size: {
              value: 4,
            },
          },
        }}
      />
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
          <textarea name="message" cols="40" rows="30" required />
          <Button type="submit" width={`50%`} height={`2rem`}>
            Send
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
  height: 60vh;
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
  padding: 2rem 4rem;
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
    margin-bottom: 1.75rem;
    padding: 2px 6px;
    @media (max-width: 650px) {
      font-size: 0.8rem;
      padding: 2px;
    }
  }
  textarea {
    resize: none;
  }
  button {
    align-self: center;
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
