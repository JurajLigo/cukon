import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Article from "../components/article/article"
import Contact from "../components/contact/contact"
import Work from "../components/work/work"
import Carousel from "../components/carousel/carousel"
import { Hero } from "../components/hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="CUKON" />
    <div>
      <Hero title="STATIKA" subtitle="Projekcna cinnost" filename="photo7.jpg" />
      <Article/>
      <Work/>
      <Carousel/>
      <Contact/>
    </div>
  </Layout>
)

export default IndexPage
