import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero/hero"
import { Article } from "../components/article/article"
import Contact from "../components/contact/contact"
import { MasonryGallery } from "../components/gallery/gallery"

const IndexPage = () => {

  return (
  <Layout>
    <SEO title="Pezinok"/>
    <Hero title="Pezinok" subtitle="detail pezinku" filename="pezinok.jpg"/>
    <Article
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
     g Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
     g Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
     g Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
     g"
      title="Priebeh stavby"
      videoPath="https://www.youtube.com/embed/tgbNymZ7vqY"
    />

    <MasonryGallery />
  </Layout>
  );
}

export default IndexPage
