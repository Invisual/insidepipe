import React, { useState } from "react"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import Container from "../bannerMOD/bannerMOD"
import { Button } from "../layout/linkBtns"
import AnimateHeight from 'react-animate-height';

import "./posts.css"

const Post = ({data, slug, selected, text}) => {
  const [open, setOpen] = useState(selected==="#" + slug);
  
  const setPost = () => {
    if(!open && typeof window !== 'undefined'){
      window.location.hash = slug;
    }
    setOpen(!open);
  }
  
  return(
    <>
    <Container img={data.image.childImageSharp.gatsbyImageData}>
      <StyledPost>
        <h3 className={font.aH + " title"}>{data.title}</h3>
        <Button onClick={setPost} className={font.aH}>{data.btn}</Button>
      </StyledPost>
    </Container>

    <AnimateHeight duration={600} height={open ? "auto" : 0} className="content">
      <StyledContent
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </AnimateHeight>
    </>
  )
}

export default Post

const StyledPost = styled.div`
  position: relative;
  width: 25%;
  margin-left: 5%;
  color: #ffffff;
  .title{
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 768px){
    width: 80%;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 5vw auto;
  text-align: center;
  h3{
    color: #006a71;
    margin-bottom: 1em;
  }
  p{
    margin: 1em 0;
  }

  @media only screen and (max-width: 768px){
    width: 80%;
    margin: 10vw auto;
  }
`