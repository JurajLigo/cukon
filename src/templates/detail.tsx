import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Article } from '../components/article/article'
import { Hero } from '../components/hero/hero'
import { MasonryGallery } from '../components/gallery/gallery'
import SEO from '../components/seo'
import { text } from "@fortawesome/fontawesome-svg-core"

export interface DetailData {
  data: {
    detailsJson: {
      name: string
      location: string
      video: string
      architect: string
      descriptions: DescriptionItem[]
      galleries: Gallery[],
      seo: SeoData;
    }
  }
}

export interface DescriptionItem {
  value: string
}

export interface SeoData {
  title: string;
  description: string;
}

export interface Gallery {
  name: string
  value: string
}

export default (data: DetailData) => {
  const texts = data.data.detailsJson

  const DetailInfo = (
    <ul>
      {texts.descriptions.map((item: DescriptionItem, index: number) => {
        return <li key={index}>{item.value}</li>
      })}
    </ul>
  )

  return (
    <Layout>
      <SEO title={texts.seo.title} description={texts.seo.description}/>
      <Hero
        title={texts.name}
        subtitle={texts.architect}
        secondSubtitle={texts.location}
        fileName="pezinok5.jpg"
      />
      <Article content={DetailInfo} title="Popis" videoPath={texts.video} />
      {texts.galleries.map((gallery: Gallery, index: number) => (
        <MasonryGallery
          key={index}
          name={gallery.value}
          images={transformToGalleryImages(data.data.allFile.edges, gallery.name)}
        />
      ))}
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
      galleries {
        name
        value
      }
      seo {
        title
        description
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

const transformToGalleryImages = (edges, name) => {
  return edges
    .filter(edge => edge.node.childImageSharp.fluid.src.indexOf(name) != -1)
    .map(edge => {
    return {
      file: edge.node.childImageSharp.fluid,
      src: edge.node.childImageSharp.fluid.src,
      width: edge.node.childImageSharp.fluid.presentationWidth,
      height: edge.node.childImageSharp.fluid.presentationHeight,
    }
  })
}
