import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/iconLnk"
import TxtLnk from "../../components/types/txtLnk"
import Video from "../../components/types/video"

const DiagEConsPage = ({data}) => (
  <Layout servicesOpen>
    <Seo title="Diagnóstico e Consultoria"/>
    <IconLnk data={data.diagnosticoJson.intro}/>
    <div style={{height: "10px"}}/>
    <TxtLnk data={data.diagnosticoJson.banner2} dark/>
    <div style={{height: "10px"}}/>
    <Video data={data.diagnosticoJson.video} dark inv/>
  </Layout>
)

export default DiagEConsPage

export const Json = graphql`
  query diagnostico {
    diagnosticoJson{
      intro{
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
      video{
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