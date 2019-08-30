import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "./article.scss"

const Article = () => {

  const data = useStaticQuery(graphql`
    query {
      team: file(relativePath: { eq: "team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <article className="article base-container">
      <div className="article__image-wrapper">
        <Img fluid={data.team.childImageSharp.fluid} className="article__image"/>
      </div>
      <div className="article__text-wrapper">
        <h2 className="title title--article">O nás</h2>
        <p>
          We and our partners use technologies, such as cookies, and process personal data, such as IP
          addresses and cookie identifiers, to personalise ads and content based on your interests, measure
          the performance of ads and content, and derive insights about the audiences who saw ads and content.
          Click below to consent to the use of this technology and the processing of your personal data for these purposes.
          You can change your mind and change your consent choices at any time by returning to this site.
        </p>
      </div>
    </article>
  );
}
export default Article
