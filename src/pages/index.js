import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo"
import Article from "../components/article/article"
import Contact from "../components/contact/contact"
import Work from "../components/work/work"
import Carousel from "../components/carousel/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="CUKON" />
    <div>
      <Hero />
      <Article/>
      <Work/>
      <Carousel/>
      <Contact/>
    </div>
  </Layout>
)

export default IndexPage
