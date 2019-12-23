import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './contact.scss'

export interface ContactData {
  site: {
    siteMetadata: {
      title
    }
  }
  logoFooter: {
    childImageSharp: {
      fixed: FixedObject
    }
  }

  officePhoto: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  contactJson: ContactTextData
}

export interface ContactTextData {
  company: {
    email: string
    phone: string
    address: string
  }
  office: {
    title: string
    name: string
    address: string
  }
  copyright: string
}

export const Contact = () => {
  const data: ContactData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logoFooter: file(relativePath: { eq: "contact/logo-footer.png" }) {
        childImageSharp {
          fixed(height: 30, width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      officePhoto: file(relativePath: { eq: "contact/office.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contactJson {
        company {
          email
          phone
          address
        }
        office {
          title
          name
          address
        }
        copyright
      }
    }
  `)

  return (
    <div>
      <footer className="footer base-container">
        <div className="footer__company">
          <Img
            fixed={data.logoFooter.childImageSharp.fixed}
            className="footer__logo-image"
          />
          <h1 className="footer__title">{data.site.siteMetadata.title}</h1>
          <p className="base-content">{data.contactJson.company.email}</p>
          <p className="base-content">{data.contactJson.company.phone}</p>
          <p className="base-content">{data.contactJson.company.address}</p>
        </div>
        <div className="footer__office">
          <h3 className="footer__title footer__title--office">
            <FontAwesomeIcon
              className="footer__icon"
              icon="briefcase"
              size="1x"
            />
            {data.contactJson.office.title}
          </h3>
          <p className="base-content">{data.contactJson.office.name}</p>
          <p className="base-content">{data.contactJson.office.address}</p>
        </div>
        <div className="footer__image">
          <Img
            fluid={data.officePhoto.childImageSharp.fluid}
            className="br-1 footer__logo-image"
          />
        </div>
      </footer>
      <div className="base-container">
        <p className="footer__copyright base-content">
          {data.contactJson.copyright}
        </p>
      </div>
    </div>
  )
}
