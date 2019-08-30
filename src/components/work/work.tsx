import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./contact.scss"
import Img from "../header"

const Contact = () => {

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
    <footer className="footer base-container">
      <div className="footer__company">
        <h1 className="footer__title">
          CUKON
        </h1>
        <p className="base-content">cukon@cukon.com</p>
        <p className="base-content">0902329589</p>
        <p className="base-content">Viedenaska 26 821 05 Bratislava</p>
      </div>
    </footer>
  );
}
export default Contact
