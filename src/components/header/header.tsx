import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "./header.scss"
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link;

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
  <header className="header">
    <div className="header__logo-wrapper">
      <Img fixed={data.logo.childImageSharp.fixed}  style={{height: `50px`, width: `50px`, display: `inline-block`}}/>
      <h1 className="header__title">
        CUKON
      </h1>
    </div>
    <nav>
      <ul className="navigation">
        <li className="navigation__item">
          <ScrollLink
            to="about-us"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            className="navigation__item"
            activeClass='navigation__item--active'
          >
            Ahoj
          </ScrollLink>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item" to="/#our-work">Naša práca</Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item" to="/blog">Kontakt</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}
export default Header
