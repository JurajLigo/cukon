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
      team: file(relativePath: { eq: "team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="gallery">
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div><Img fluid={data.team.childImageSharp.fluid} className="article__image"/></div>
        <div>PANE 2</div>
        <div>PANE 3</div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};

export default Carousel