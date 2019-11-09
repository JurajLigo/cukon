/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'

import "./base.scss"
import Header from "./header/header"
import {MobileHeader} from "./header/mobileHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


library.add(faBuilding);

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MobileHeader siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
