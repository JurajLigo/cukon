import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero/hero"
import { Article } from "../components/article/article"
import { MasonryGallery } from "../components/gallery/gallery"
import { graphql, useStaticQuery } from 'gatsby'
import { MainPageData } from './index'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "pezinok.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const DetailInfo = (
      <ul>
        <li>Popis: 8 bytových domov</li>
        <li>Podlažnosť: 4 až 7 podlaží</li>
        <li>Nosný systém: stenový</li>
        <li>Materál: železobetón</li>
      </ul>
  );

  return (
    <Layout>
      <SEO title="Pezinok" />
      <Hero title="Pezinok" subtitle="detail pezinku" image={data.heroImage.childImageSharp.fluid} />
      <Article
        content={DetailInfo}
        title="Popis"
        videoPath="https://www.youtube.com/embed/6qN6ejdqEhc"
      />

      <MasonryGallery />
    </Layout>
  )
}

export default IndexPage
