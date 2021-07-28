import React, { useRef } from "react"
import styled, { css } from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import Container from "../bannerMOD/bannerMOD"
import { Button } from "../layout/linkBtns"

const Video = ({data, dark, inv}) => {

  const vid = useRef(null);
  const playVideo = () => {
    vid.current.style.display = "block";
    setTimeout(function(){ vid.current.style.opacity = "1"; }, 10);
  }

  return(
    <Container img={data.img.childImageSharp.gatsbyImageData}>
      <StyledVideo inv={inv && +inv}>
        <h3 className={!dark ? font.aH + " title" : font.aH + " title dark-title"}>{data.title}</h3>
        <p className={!dark ? font.aB + " text" : font.aB + " text dark"}>
          {data.text.map((data, i)=>(
            <span className={i%2!==0 ? font.aM + " bold" : undefined} key={"paragraph" + i}>{data}</span>
          ))}
        </p>
        <Button onClick={playVideo} className={font.aH} dark={dark && +dark}>{data.btnTxt}</Button>
      </StyledVideo>

      <Videoframe ref={vid} width="100%" height="100%" src={data.btnLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Videoframe>
    </Container>
  )
}
export default Video

const Videoframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: none;
  transition: opacity 200ms ease-out;
`

const StyledVideo = styled.div`
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