import React from "react"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import Container from "../bannerMOD/bannerMOD"
import ButtonLink from "../layout/linkBtns"

const IconLnk = ({data, dark}) => {

  return(
    <Container img={data.img.childImageSharp.gatsbyImageData}>
      <StyledIconLnk>
        <h3 className={font.aH + " title"}>
          <img src={data.icon.publicURL} alt="Icon" className="icon"/>
          <span>{data.title}</span>
        </h3>
        {data.btnTxt && <ButtonLink to={data.btnLink} className={font.aH} dark={dark && +dark}>{data.btnTxt}</ButtonLink>}
      </StyledIconLnk>
    </Container>
  )
}

export default IconLnk

const StyledIconLnk = styled.div`
  position: relative;
  width: 28%;
  margin-left: 5%;
  color: #ffffff;
  .title{
    display: flex;
    align-items: center;
    margin-bottom: 2em;
    .icon{
      height: 3em;
      margin-right: 1.5em;
    }
  }
`