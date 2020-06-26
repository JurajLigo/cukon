import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import './work.scss'
import 'react-vertical-timeline-component/style.min.css'
import { Image } from '../img/Image'

export interface WorkItemProps {
  name: string;
  year: string;
  location: string;
  architect: string;
  resourceName: string;
  imageForList: string;
}

export const WorkItem = (props: WorkItemProps) => {
  const {name, year, location, architect, resourceName, imageForList} = props;

  const BuildingIcon = (
    <FontAwesomeIcon className="work-item__icon" icon="building" size="2x" />
  )

  const iconBackground = { background: 'rgb(255, 255, 255)', color: '#fff' }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={year}
      iconStyle={iconBackground}
      icon={BuildingIcon}
    >
      <div className="work-item">
        <div className="work-item__image-wrapper">
          <Link className="primary" to={`/${resourceName}`}>
            <Image filename={imageForList} classname='work-item__image' />
          </Link>
        </div>
        <div className="work-item__text-wrapper">
          <h3 className="vertical-timeline-element-title">{name}</h3>
          <p className="vertical-timeline-element-text">
            {location}
          </p>
          <p className="vertical-timeline-element-text">
           {architect}
          </p>
          <Link className="work-item__detail-link" to={`/${resourceName}`}>
            Detail
          </Link>
        </div>
      </div>
    </VerticalTimelineElement>
  )
}
