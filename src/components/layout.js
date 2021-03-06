import React from "react"
import PropTypes from "prop-types"
import Logo from "../images/main-logo.svg"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/header.scss"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  
  return (
    <div className="site-pattern">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer>
          <img className="footer-logo" src={Logo} />
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
