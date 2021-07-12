import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import IconLnk from "../../components/types/iconLnk"

const ServicosPage = ({data}) => (
  <Layout servicesOpen>
    <Seo title="Serviços"/>
    {data.servicosJson.homelinks.map((data, i)=>(
      <div key={i}>
        {i!==0 && <div style={{height: "10px"}}/>}
        <IconLnk data={data} light/>
      </div>
    ))}
  </Layout>
)

export default ServicosPage

export const Json = graphql`
  query servicos {
    servicosJson{
      homelinks{
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
    }
  }
`