import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "./header.scss"

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
          O Nás
        </li>
        <li className="navigation__item">
          Naša práca
        </li>
        <li className="navigation__item">
          Kontakt
        </li>
      </ul>
    </nav>
  </header>
  );
}
export default Header
