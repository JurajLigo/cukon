import * as React from "react";
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./carousel.scss"

const Carousel = () => {
  let reactSwipeEl;

  const data = useStaticQuery(graphql`
    query {
      pezinok: file(relativePath: { eq: "pezinok.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
          aspectRatio
          ...GatsbyImageSharpFluid
          }
        }
      }
      pezinok2: file(relativePath: { eq: "pezinok2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
          aspectRatio
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log('OUTOPUT ', data.pezinok.childImageSharp.fluid.aspectRatio);
  console.log('OUTOPUT ', data.pezinok2.childImageSharp.fluid.aspectRatio);

  return (
    <div className="gallery">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div><Img fluid={data.pezinok.childImageSharp.fluid} className="gallery__image gallery__image--wide"/></div>
        <div><Img fluid={data.pezinok2.childImageSharp.fluid} className="gallery__image gallery__image--narrow"/></div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel