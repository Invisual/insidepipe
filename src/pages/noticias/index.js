import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import Seo from "../../components/layout/seo"
import Post from "../../components/types/post"

const NoticiasPage = ({data}) => {
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  
  return(
    <Layout>
      <Seo title="Notícias"/>
      {data.allMarkdownRemark.edges.map((data, i)=>(
        <div key={"Post:" + i} id={data.node.fields.slug}>
          {i!==0 && <div style={{height: "10px"}}/>}
          <Post data={data.node.frontmatter} slug={data.node.fields.slug} selected={hash} text={data.node.html}/>
        </div>
      ))}
    </Layout>
  )
}

export default NoticiasPage

export const Json = graphql`
  query noticias {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp{
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 3840
                )
              }
            }
            imageM {
              childImageSharp{
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  width: 3840
                )
              }
            }
            id
            date(formatString: "DD-MM-YYYY")
            data
            btn
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`