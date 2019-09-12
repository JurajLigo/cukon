import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./contact.scss"

const Contact = () => {


  const logoImg = useStaticQuery(graphql`
    query {
      logoFooter: file(relativePath: { eq: "logo-footer.png" }) {
        childImageSharp {
          fixed(height: 30, width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  /**
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
  `);
   **/

 // <Img fluid={officeImg.office.childImageSharp.fluid} className="footer__image-content br-1"/>

  return (
    <div>
      <footer className="footer base-container">
      <div className="footer__company">
        <Img fixed={logoImg.logoFooter.childImageSharp.fixed} className="footer__logo-image" />
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
