import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Article } from '../components/article/article'
import { Hero } from '../components/hero/hero'
import { MasonryGallery } from '../components/gallery/gallery'

export interface DetailData {
  data: {
    detailsJson: {
      name: string
      location: string
      video: string
      architect: string
      descriptions: DescriptionItem[]
    }
  }
}

export interface DescriptionItem {
  value: string
}

export default (data: DetailData) => {
  const props = data.data.detailsJson

  const images = data.data.allFile.edges[0]

  console.log('DETAIL IMAGE', images)

  const DetailInfo = (
    <ul>
      {props.descriptions.map((item: DescriptionItem) => {
        return <li>{item.value}</li>
      })}
    </ul>
  )

  return (
    <Layout>
      <Hero title="Title" subtitle="Subtitle" fileName="bory.jpg" />
      <Article content={DetailInfo} title="Popis" videoPath={props.video} />
      <MasonryGallery
        images={transformToGalleryImages(data.data.allFile.edges)}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $resourceName: String!) {
    detailsJson(id: { eq: $id }) {
      name
      location
      architect
      video
      descriptions {
        value
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: $resourceName }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              presentationWidth
              presentationHeight
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

const transformToGalleryImages = edges => {
  return edges.map(edge => {
    return {
      file: edge.node.childImageSharp.fluid,
      src: edge.node.childImageSharp.fluid.src,
      width: edge.node.childImageSharp.fluid.presentationWidth,
      height: edge.node.childImageSharp.fluid.presentationHeight,
    }
  })
}
