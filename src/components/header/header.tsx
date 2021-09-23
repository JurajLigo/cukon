import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import './header.scss'

export interface HeaderData {
  site: {
    siteMetadata: {
      title
    }
  }
  logo: {
    childImageSharp: {
      fixed: FixedObject
    }
  }
  headerJson: HeaderJsonData
}

export interface HeaderJsonData {
  menuItems: {
    aboutUs: string
    ourWork: string
    contact: string
  }
}

export const Header = () => {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 70, width: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      headerJson {
        menuItems {
          aboutUs
          ourWork
          contact
        }
      }
    }
  `)
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Img fixed={data.logo.childImageSharp.fixed} className="header__logo" />
        <h1 className="header__title">{data.site.siteMetadata.title}</h1>
      </div>
      <nav>
        <ul className="navigation">
          <li className="navigation__item">
            <Link className="navigation__item" to="/#about-us">
              {data.headerJson.menuItems.aboutUs}
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__item" to="/#our-work">
              {data.headerJson.menuItems.ourWork}
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__item" to="/#contact">
              {data.headerJson.menuItems.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
