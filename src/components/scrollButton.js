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
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ScrollTopWrapper>
      {showScroll && (
        <FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollTop} />
      )}
    </ScrollTopWrapper>
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
  font-size: 3rem;
  color: #744c9e;
`

export default ScrollButton
