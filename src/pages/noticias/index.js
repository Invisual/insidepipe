import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import TxtLnk from "../../components/types/txtLnk"

const NoticiasPage = ({data}) => (
  <Layout>
    <Seo title="Notícias"/>
  </Layout>
)

export default NoticiasPage

export const Json = graphql`
  query noticias {
    noticiasJson{
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