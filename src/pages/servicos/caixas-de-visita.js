import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/iconLnk"
import TxtLnk from "../../components/types/txtLnk"

import Slider from "react-slick"
import styled from "styled-components"

import LArrow from "../../images/left-arrow-b.svg"
import RArrow from "../../images/right-arrow-b.svg"

const VisitaPage = ({data}) => {

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
    arrows: false,
    customPaging: i => <button className="dots-custom" aria-label={"Slider: " + i}/>,
    useTransform: false
  };

  return(
    <Layout servicesOpen>
      <Seo title="Caixas de Visita"/>
      <IconLnk data={data.visitaJson.intro}/>
      <div style={{height: "10px"}}/>
      <StyledSlider>
        <Slider {...settings}>
          {data.visitaJson.banner2.map((data, i)=>(
            <TxtLnk data={data} dark key={"slide" + i}/>
            ))}
        </Slider>
      </StyledSlider>
      <div style={{height: "10px"}}/>
      {data.visitaJson.banner34.map((data, i)=>(
        <div key={i}>
          {i!==0 && <div style={{height: "10px"}}/>}
          <TxtLnk data={data} dark inv={i%2===0}/>
        </div>
      ))}
    </Layout>
  )
}

export default VisitaPage

const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  background-color: #006a71;
  .slick-track{
    position: relative;
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
    background-color: #006a71;
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
  query visita {
    visitaJson{
      intro{
        img{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
              quality: 100
            )
          }
        }
        imgM{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
            )
          }
        }
        title
        icon{
          publicURL
        }
        btnLink
        btnTxt
      }
      banner2{
        img{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
            )
          }
        }
        imgM{
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
      banner34{
        img{
          childImageSharp{
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 3840
            )
          }
        }
        imgM{
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