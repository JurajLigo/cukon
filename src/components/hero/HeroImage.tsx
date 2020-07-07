import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from  "gatsby-background-image"
import * as React from "react";
import "./hero.scss"

interface HeroImageProps {
  filename: string;
}

export const HeroImage = (props: HeroImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      return (
        // @ts-ignore
        <BackgroundImage fluid={image.node.childImageSharp.fluid} className="hero__background" />
      );
    }}
  />
)