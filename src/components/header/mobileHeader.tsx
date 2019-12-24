import { graphql, useStaticQuery } from 'gatsby'
import { useEffect, useState } from 'react'
import * as React from 'react'
import Img from 'gatsby-image'
import HamburgerMenu from 'react-hamburger-menu'
import './mobileHeader.scss'
import { HeaderData } from './header'

const classNames = require('classnames')

export const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const data: HeaderData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('open-mobile-menu')
    } else {
      document.body.classList.remove('open-mobile-menu')
    }
  }, [isMenuOpen])

  const menuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const navigationCls: any = classNames({
    'mobile-navigation': true,
    'mobile-navigation--hide': !isMenuOpen,
  })

  return (
    <header className="mobile-header">
      <div className="mobile-header__logo-wrapper">
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className="mobile-header__logo"
        />
        <h1 className="mobile-header__title">{data.site.siteMetadata.title}</h1>
      </div>
      <div className="mobile-header__navigation-icon">
        <HamburgerMenu
          isOpen={isMenuOpen}
          menuClicked={menuClick}
          width={36}
          height={20}
          strokeWidth={5}
          rotate={0}
          color="black"
          borderRadius={10}
        />
      </div>
      <nav className={navigationCls}>
        <ul className="mobile-navigation__list">
          <li className="mobile-navigation__item">
            {data.headerJson.menuItems.aboutUs}
          </li>
          <li className="mobile-navigation__item">
            {data.headerJson.menuItems.ourWork}
          </li>
          <li className="mobile-navigation__item">
            {data.headerJson.menuItems.contact}
          </li>
        </ul>
      </nav>
    </header>
  )
}
