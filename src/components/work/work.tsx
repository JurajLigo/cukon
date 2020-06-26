import * as React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './work.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img, { FixedObject, FluidObject } from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WorkItem } from './workItem'
import { ContactTextData } from '../contact/contact'
import { node } from 'prop-types'

export interface WorkData {
  allDetailsJson: {
    edges: NodeData[]
  }
}

export interface NodeData {
  node: WorkItemDetail
}

export interface WorkItemDetail {
  id: string
  resourceName: string
  year: string
  name: string
  location: string
  architect: string
  imageForList: string
}

const Work = () => {
  const workItems: WorkData = useStaticQuery(graphql`
    query {
      allDetailsJson {
        edges {
          node {
            id
            resourceName
            year
            name
            location
            architect
            imageForList
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
    <div className="work">
      <h2 className="title title--article title--center">Naša práca</h2>
      <VerticalTimeline>
        {workItems.allDetailsJson.edges.map((node: NodeData) => (
          <WorkItem
            year={node.node.year}
            architect={node.node.architect}
            location={node.node.location}
            name={node.node.name}
            resourceName={node.node.resourceName}
            imageForList={node.node.imageForList}
          />
        ))}
      </VerticalTimeline>
    </div>
  )
}
export default Work
