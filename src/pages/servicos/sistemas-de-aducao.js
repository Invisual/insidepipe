import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/iconLnk"
import TxtLnk from "../../components/types/txtLnk"

const AducaoPage = ({data}) => (
  <Layout servicesOpen>
    <Seo title="Sistemas de Adução"/>
    <IconLnk data={data.aducaoJson.intro}/>
    <div style={{height: "10px"}}/>
  </Layout>
)

export default AducaoPage

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
    }
  }
`