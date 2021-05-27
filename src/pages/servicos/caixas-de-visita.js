import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import TxtLnk from "../../components/types/txtLnk"

const VisitaPage = ({data}) => (
  <Layout servicesOpen>
    <Seo title="Caixas de Visita"/>
    {data.visitaJson.homelinks.map((data, i)=>(
      <div key={i}>
        {i!==0 && <div style={{height: "10px"}}/>}
        <TxtLnk data={data} light/>
      </div>
    ))}
  </Layout>
)

export default VisitaPage

export const Json = graphql`
  query visita {
    visitaJson{
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
    }
  }
`