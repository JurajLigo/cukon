import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Article } from '../components/article/article'
import { Hero } from '../components/hero/hero'
import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Work from '../components/work/work'

export interface MainPageData {
  teamImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  heroPhoto: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  mainPageJson: MainPageJsonData
}

export interface MainPageJsonData {
  hero: {
    title: string
    subtitle: string
  }
  aboutUs: {
    title: string
    text: string
  }
}

const IndexPage = () => {
  const data: MainPageData = useStaticQuery(graphql`
    query {
      teamImage: file(relativePath: { eq: "mainPage/team.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroPhoto: file(relativePath: { eq: "mainPage/main-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainPageJson {
        hero {
          title
          subtitle
        }
        aboutUs {
          title
          text
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <>
        <Hero
          title={data.mainPageJson.hero.title}
          subtitle={data.mainPageJson.hero.subtitle}
          image={data.heroPhoto.childImageSharp.fluid}
        />
        <div id="about-us"></div>
          <Article
            title={data.mainPageJson.aboutUs.title}
            image={data.teamImage.childImageSharp.fluid}
            content={data.mainPageJson.aboutUs.text}
          />
        <div id="our-work"></div>
          <Work />
      </>
    </Layout>
  )
}

export default IndexPage
