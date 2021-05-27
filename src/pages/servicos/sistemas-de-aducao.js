import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/iconLnk"
import TxtLnk from "../../components/types/txtLnk"

import Slider from "react-slick"
import styled from "styled-components"

const AducaoPage = ({data}) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    customPaging: i => <button className="dots-custom" aria-label={"Slider: " + i}/>
  };

  return(
    <Layout servicesOpen>
      <Seo title="Sistemas de Adução"/>
      <IconLnk data={data.aducaoJson.intro}/>
      <div style={{height: "10px"}}/>
      <TxtLnk data={data.aducaoJson.banner2} dark inv/>
      <div style={{height: "10px"}}/>
      <StyledSlider>
        <Slider {...settings}>
          {data.aducaoJson.banner3.map((data, i)=>(
            <TxtLnk data={data} dark key={"slide" + i}/>
            ))}
        </Slider>
      </StyledSlider>
      <div style={{height: "10px"}}/>
      {data.aducaoJson.banners45.map((data, i)=>(
        <div key={i}>
          {i!==0 && <div style={{height: "10px"}}/>}
          <TxtLnk data={data} dark inv={i%2===0}/>
        </div>
      ))}
    </Layout>
  )
}

export default AducaoPage

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
  query aducao {
    aducaoJson{
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
        title
        text
        btnLink
        btnTxt
      }
      banner3{
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
      banners45{
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