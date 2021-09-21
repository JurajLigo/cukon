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
  contact: {
    title: string
    name: string
    phone: string
    email: string
  }
  office: {
    title: string
    name: string
    address: string
    floor: string
  }
  invoice: {
    title: string
    name: string
    address: string
    ico: string
    dic: string
    icdph: string
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
        contact {
          title
          name
          phone
          email
        }
        office {
          title
          name
          address
          floor
        }
        invoice {
          title
          name
          address
          ico
          dic
          icdph
        }
        copyright
      }
    }
  `)

  return (
    <div id="contact" className="base-container footer">
      <Img
        fixed={data.logoFooter.childImageSharp.fixed}
        className="footer__logo-image"
      />
      <h1 className="footer__logo-title">{data.site.siteMetadata.title}</h1>
      <footer className="footer__content">
        <div className="footer__contact">
          <h3 className="footer__content-title">
            <FontAwesomeIcon className="footer__icon" icon="phone" size="1x" />
            {data.contactJson.contact.title}
          </h3>
          <p className="base-content">{data.contactJson.contact.name}</p>
          <p className="base-content">{data.contactJson.contact.phone}</p>
          <p className="base-content">{data.contactJson.contact.email}</p>
          <br />
          <p className="base-content">Ing. Peter Čuhák</p>
          <p className="base-content">+421 949 370 903</p>
          <p className="base-content">peter@cukon.sk</p>
        </div>
        <div className="footer__office">
          <h3 className="footer__content-title">
            <FontAwesomeIcon
              className="footer__icon"
              icon="briefcase"
              size="1x"
            />
            {data.contactJson.office.title}
          </h3>
          <p className="base-content">{data.contactJson.office.name}</p>
          <p className="base-content">{data.contactJson.office.address}</p>
          <p className="base-content">{data.contactJson.office.floor}</p>
        </div>
        <div className="footer__invoice">
          <h3 className="footer__content-title">
            <FontAwesomeIcon
              className="footer__icon"
              icon="file-invoice"
              size="1x"
            />
            {data.contactJson.invoice.title}
          </h3>
          <p className="base-content">{data.contactJson.invoice.name}</p>
          <p className="base-content">{data.contactJson.invoice.address}</p>
          <p className="base-content">{data.contactJson.invoice.ico}</p>
          <p className="base-content">{data.contactJson.invoice.dic}</p>
          <p className="base-content">{data.contactJson.invoice.icdph}</p>
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
