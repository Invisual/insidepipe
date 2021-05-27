import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/IconLnk"
import TxtLnk from "../../components/types/txtLnk"

const DiagEConsPage = ({data}) => (
  <Layout servicesOpen>
    <Seo title="Diagnóstico e Consultoria"/>
    <IconLnk data={data.diagnosticoJson.intro}/>
    <div style={{height: "10px"}}/>
    <TxtLnk data={data.diagnosticoJson.desc}/>
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
      desc{
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