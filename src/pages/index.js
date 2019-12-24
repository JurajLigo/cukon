import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Article } from '../components/article/article'
import { Contact } from '../components/contact/contact'
import Work from '../components/work/work'
import { Hero } from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
      <SEO title="CUKON" />
      <div>
        <Hero
          title="STATIKA"
          subtitle="Projekcna cinnost"
          filename="photo7.jpg"
        />
          <Article
            title="O nas"
            imagePath="team.jpg"
            text="We and our partners use technologies, such as cookies, and process personal data, such as IP
                 addresses and cookie identifiers, to personalise ads and content based on your interests,
                 measure the performance of ads and content, and derive insights about the audiences who saw ads
                 and content. Click below to consent to the use of this technology and the processing of your personal data
                 for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
          />
      </div>
  </Layout>
)

export default IndexPage
