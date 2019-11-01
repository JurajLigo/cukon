import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Pezinok" />
    <Hero title="Pezinok" subtitle="detail pezinku" filename="pezinok.jpg" />
  </Layout>
)

export default IndexPage
