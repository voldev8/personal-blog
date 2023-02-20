import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScroll && (
        <ScrollTopWrapper>
          <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollTop} />
        </ScrollTopWrapper>
      )}
    </>
  )
}
const ScrollTopWrapper = styled.i`
  position: fixed;
  padding: 0;
  margin: 0;
  bottom: 2rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  font-weight: 900;
  border-radius: 50%;
  background-color: #744c9e;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.9;
  }
`

export default ScrollButton
