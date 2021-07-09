import React from "react"
import styled, { css } from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import Container from "../bannerMOD/bannerMOD"
import ButtonLink from "../layout/linkBtns"

const TxtLnk = ({data, dark, inv}) => {
  return(
    <Container img={data.img.childImageSharp.gatsbyImageData}>
      <StyledTxtLnk inv={inv && +inv}>
        <h3 className={!dark ? font.aH + " title" : font.aH + " title dark-title"}>{Array.isArray(data.title) ? <span>{data.title[0]}<span style={{fontStyle: "italic"}}>{data.title[1]}</span></span> : data.title}</h3>
        <p className={!dark ? font.aB + " text" : font.aB + " text dark"}>
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
  ${props =>
    props.inv &&
    css`
      margin-left: 70%;
    `
  }
  .text{
    margin: 2em 0;
    white-space: pre-wrap;
    .bold{
      font-weight: bold;
    }
  }
  .dark{
    color: #000000;
  }
  .dark-title{
    color: #006a71;
  }
  
  @media only screen and (max-width: 768px){
    width: 80%;
    ${props =>
      props.inv &&
      css`
        margin-left: 5%;
      `
    }
  }
`