import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import TxtLnk from "../components/types/txtLnk"
import VideoLnk from "../components/types/videoLnk"

const EmpresaPage = ({ data }) => (
    <Layout>
        <Seo title="Empresa" />
        {data.empresaJson.homelinks.map((data, i) => (
            data.video ?
                <div key={i}>
                    {i !== 0 && <div style={{ height: "10px" }} />}
                    <VideoLnk video={data.videoSrc} />
                </div>
                :
                <div key={i}>
                    {i !== 0 && <div style={{ height: "10px" }} />}
                    <TxtLnk data={data} light />
                </div>
        ))}
    </Layout>
)

export default EmpresaPage

export const Json = graphql`
  query empresa {
    empresaJson{
      homelinks{
        video
        videoSrc
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