import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export interface ImageProps {
  classname: string;
  filename: string;
}

export const Image = (props: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
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
        console.log('image ',n);
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      return (
        <Img fluid={image.node.childImageSharp.fluid} className={props.classname} />
      );
    }}
  />
)