import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import TxtLnk from "../components/types/txtLnk"

const ContactosPage = ({data}) => (
  <Layout>
    <Seo title="Contactos"/>
    {data.contactosJson.homelinks.map((data, i)=>(
      <div key={i}>
        {i!==0 && <div style={{height: "10px"}}/>}
        <TxtLnk data={data} light/>
      </div>
    ))}
  </Layout>
)

export default ContactosPage

export const Json = graphql`
  query contactos {
    contactosJson{
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