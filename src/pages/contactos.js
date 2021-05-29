import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import TxtLnk from "../components/types/txtLnk"
import Form from "../components/contactos/contacts-form"
import Map from "../components/contactos/map"

const ContactosPage = ({data}) => (
  <Layout>
    <Seo title="Contactos"/>
    <TxtLnk data={data.contactosJson.banner1}/>
    <Form data={data.contactosJson.form}/>
    <Map/>
  </Layout>
)

export default ContactosPage

export const Json = graphql`
  query contactos {
    contactosJson{
      banner1{
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
      form{
        contacts{
          title
          geral{
            title
            email
            phone
          }
          comercial{
            title
            emailC
            phoneC
            emailT
            phoneT
          }
          producao{
            title
            email1
            email2
            phone
          }
        }
        form{
          name
          email
          subject
          message
          legenda
          btn
          success
        }
      }
    }
  }
`