import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import Bory from '../../images/bory.jpg'

import './work.scss'
import 'react-vertical-timeline-component/style.min.css'

export interface WorkItemProps {}

export const WorkItem = (props: WorkItemProps) => {
  const BuildingIcon = (
    <FontAwesomeIcon className="work-item__icon" icon="building" size="2x" />
  )

  const iconBackground = { background: 'rgb(255, 255, 255)', color: '#fff' }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2019"
      iconStyle={iconBackground}
      icon={BuildingIcon}
    >
      <div className="work-item">
        <div className="work-item__image-wrapper">
          <Link className="primary" to="/pezinok">
            <img src={Bory} className="work-item__image" />
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
  )
}
