import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBuilding, faBriefcase, faPhone, faFileInvoice} from '@fortawesome/free-solid-svg-icons'

import "./base.scss"
import { Header } from "./header/header"
import {MobileHeader} from "./header/mobileHeader"
import { Contact } from './contact/contact'


library.add(faBuilding);
library.add(faBriefcase);
library.add(faPhone);
library.add(faFileInvoice);

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
        <Contact />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
