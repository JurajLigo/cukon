import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image";

export interface ImageProps {
  classname: string;
  filename: string;
}

export const Image = (props: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500) {
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
        <Img fluid={image.node.childImageSharp.fluid} className={props.classname} />
      );
    }}
  />
)