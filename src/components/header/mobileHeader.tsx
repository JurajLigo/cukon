import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Img from "gatsby-image"
import "./mobileHeader.scss"
import HamburgerMenu from "react-hamburger-menu"

const classNames = require('classnames');

export const MobileHeader = ({ siteTitle }) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const menuClick = () => {
    setMenuOpen(!isMenuOpen);
  }

  const navigationCls: any = classNames({
    'mobile-navigation': true,
    'mobile-navigation--hide': !isMenuOpen
  });

  return (
  <header className="mobile-header">
    <div className="mobile-header__logo-wrapper">
      <Img fixed={data.logo.childImageSharp.fixed}  style={{height: `40px`, width: `40px`, display: `inline-block`}}/>
      <h1 className="mobile-header__title">
        CUKON
      </h1>
    </div>
    <div className="mobile-header__navigation-icon">
      <HamburgerMenu
        isOpen={isMenuOpen}
        menuClicked={menuClick}
        width={36}
        height={20}
        strokeWidth={5}
        rotate={0}
        color='black'
        borderRadius={10} />
    </div>
    <nav className={navigationCls}>
      <ul className="mobile-navigation__list">
        <li className="mobile-navigation__item">
          O Nás
        </li>
        <li className="mobile-navigation__item">
          Naša práca
        </li>
        <li className="mobile-navigation__item">
          Kontakt
        </li>
      </ul>
    </nav>
  </header>
  );
}
