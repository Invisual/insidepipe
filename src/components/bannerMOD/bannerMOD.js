import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = ({children, img}) => {

  return(
    <StyledContainer>
      <GatsbyImage image={img} alt={"Background"} className="bg-img"/>
      {children}
    </StyledContainer>
  )
}

export default Container

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36.6vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .bg-img{
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width: 768px){
    height: 125vw;
  }
`