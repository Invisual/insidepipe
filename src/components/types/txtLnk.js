import React from "react"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import Container from "../bannerMOD/bannerMOD"
import ButtonLink from "../layout/linkBtns"

const TxtLnk = ({data, dark}) => {

  return(
    <Container img={data.img.childImageSharp.gatsbyImageData}>
      <StyledTxtLnk>
        <h3 className={font.aH + " title"}>{data.title}</h3>
        <p className={font.aB + " text"}>
          {data.text.map((data, i)=>(
            <span className={i%2!==0 ? font.aM + " bold" : undefined} key={"paragraph" + i}>{data}</span>
          ))}
        </p>
        {data.btnTxt && <ButtonLink to={data.btnLink} className={font.aH} dark={dark && +dark}>{data.btnTxt}</ButtonLink>}
      </StyledTxtLnk>
    </Container>
  )
}

export default TxtLnk

const StyledTxtLnk = styled.div`
  position: relative;
  width: 25%;
  margin-left: 5%;
  color: #ffffff;
  .text{
    margin: 2em 0;
    white-space: pre-wrap;
    .bold{
      font-weight: bold;
    }
  }
`