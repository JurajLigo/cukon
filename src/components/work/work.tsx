import * as React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './work.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Work = () => {
  const images = useStaticQuery(graphql`
    query {
      bory: file(relativePath: { eq: "bory.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      house: file(relativePath: { eq: "dom1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const BuildingIcon = (
    <FontAwesomeIcon className="work-item__icon" icon="building" size="2x" />
  )
  const iconBackground = { background: 'rgb(255, 255, 255)', color: '#fff' }

  return (
    <div className="work" id="our-work">
      <h2 className="title title--article title--center">Naša práca</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={iconBackground}
          icon={BuildingIcon}
        >
          <div className="work-item">
            <div className="work-item__image-wrapper">
              <Link className="primary" to="/pezinok">
                <Img
                  fluid={images.bory.childImageSharp.fluid}
                  className="work-item__image"
                />
              </Link>
            </div>
            <div className="work-item__text-wrapper">
              <h3 className="vertical-timeline-element-title">Bory</h3>
              <h4 className="vertical-timeline-element-subtitle">Bratislava</h4>
              <p className="vertical-timeline-element-text">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading...
                <Link className="work-item__detail-link" to="/pezinok">
                  zisti viac
                </Link>
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={iconBackground}
          icon={BuildingIcon}
        >
          <div className="work-item">
            <div className="work-item__image-wrapper">
              <Img
                fluid={images.house.childImageSharp.fluid}
                className="work-item__image"
              />
            </div>
            <div className="work-item__text-wrapper">
              <h3 className="vertical-timeline-element-title">Rodinny dom</h3>
              <h4 className="vertical-timeline-element-subtitle">Piestany</h4>
              <p className="vertical-timeline-element-text">
                Navrh analyza, vsetko
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={iconBackground}
          icon={BuildingIcon}
        >
          <div className="work-item">
            <div className="work-item__image-wrapper">
              <Img
                fluid={images.bory.childImageSharp.fluid}
                className="work-item__image"
              />
            </div>
            <div className="work-item__text-wrapper">
              <h3 className="vertical-timeline-element-title">Bory</h3>
              <h4 className="vertical-timeline-element-subtitle">Bratislava</h4>
              <p className="vertical-timeline-element-text">
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={iconBackground}
          icon={BuildingIcon}
        >
          <div className="work-item">
            <div className="work-item__image-wrapper">
              <Img
                fluid={images.house.childImageSharp.fluid}
                className="work-item__image"
              />
            </div>
            <div className="work-item__text-wrapper">
              <h3 className="vertical-timeline-element-title">Rodinny dom</h3>
              <h4 className="vertical-timeline-element-subtitle">Piestany</h4>
              <p className="vertical-timeline-element-text">
                Navrh analyza, vsetko
              </p>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
export default Work
