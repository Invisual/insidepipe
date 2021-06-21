import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import TxtLnk from "../components/types/txtLnk"

import Slider from "react-slick"
import styled from "styled-components"

import LArrow from "../images/left-arrow-w.svg"
import RArrow from "../images/right-arrow-w.svg"

const AguaPage = ({data}) => {

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <StyledArrow className={className} style={{ ...style, right: "1vw" }} onClick={onClick}>
        <img src={RArrow}/>
      </StyledArrow>
    )
  }
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <StyledArrow className={className} style={{ ...style, left: "1vw" }} onClick={onClick}>
        <img src={LArrow}/>
      </StyledArrow>
    )
  }
  const StyledArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  opacity: 0.5;
  transition: opacity 200ms ease-out;
  :hover{
    opacity: 1;
  }
    img{
      width: 3vw;
      height: 3vw;
    }
  `

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: i => <button className="dots-custom" aria-label={"Slider: " + i}/>
  };
  
  return(
    <Layout>
      <Seo title="Água"/>
      {data.aguaJson.homelinks.map((data, i)=>(
        <div key={i}>
          {i!==0 && <div style={{height: "10px"}}/>}
          <TxtLnk data={data} light/>
        </div>
      ))}
      <div style={{height: "10px"}}/>
      <StyledSlider>
        <Slider {...settings}>
          {data.aguaJson.slider.map((data, i)=>(
            <TxtLnk data={data} light key={"slide" + i}/>
          ))}
        </Slider>
      </StyledSlider>
    </Layout>
  )
}

export default AguaPage

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  background-color: #006a71;
  .slick-track{
    display: flex;
  }
  .slick-list{
    overflow: hidden;
    padding: 0 !important;
  }
  .slick-dots{
    display: flex !important;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .dots-custom{
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #ffffff;
    opacity: 0.5;
    border-radius: 100%;
  }
  .slick-active{
    .dots-custom{
      opacity: 1;
    }
  }
`

export const Json = graphql`
  query agua {
    aguaJson{
      homelinks{
        img{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
            )
          }
        }
        title
        text
        btnLink
        btnTxt
      }
      slider{
        img{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
            )
          }
        }
        title
        text
        btnLink
        btnTxt
      }
    }
  }
`