import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./contact.scss"

const Contact = () => {

  const officeImg = useStaticQuery(graphql`
    query {
      office: file(relativePath: { eq: "vienna.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logoImg = useStaticQuery(graphql`
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
    <div>
      <footer className="footer base-container">
      <div className="footer__company">
        <h1 className="footer__title">
          CUKON
        </h1>
        <p className="base-content">cukon@cukon.com</p>
        <p className="base-content">0902329589</p>
        <p className="base-content">Viedenaska 26 821 05 Bratislava</p>
      </div>
      <div className="footer__office">
        <h3 className="footer__title footer__title--office">Naša kancelária</h3>
        <p className="base-content">Vienna GATE</p>
        <p className="base-content">Viedenaska 26 821 05 Bratislava</p>
      </div>
      <div className="footer__image">
        <Img fluid={officeImg.office.childImageSharp.fluid} className="footer__image-content br-1"/>
      </div>
    </footer>
      <div className="base-container">
        <p className="footer__copyright base-content">
          © 2019, Creatix Inc., All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Contact
