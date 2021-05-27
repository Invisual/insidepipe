import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

import "./layout.css"

const Layout = ({ children, servicesOpen }) => {
  const data = useStaticQuery(graphql`
    query Layout {
      globalJson{
        sidemenu {
          links {
            link
            linkTxt
            extraLinks {
              link
              linkTxt
            }
          }
        }
        footer{
          address
          privacy
          cofinan
        }
      }
    }
  `)

  return (
    <main>
      <Navbar sidemenu={data.globalJson.sidemenu} servicesOpen={servicesOpen}/>
      <div className="nav-margin" style={{height: "100px", width: "100%", backgroundColor: "#006a71"}}/>
      {children}
      <Footer data={data.globalJson.footer}/>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
