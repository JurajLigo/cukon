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
import { WorkItem } from './workItem'

const Work = () => {

  const workItems = useStaticQuery(graphql`
   query {
      allDetailsJson {
        edges {
          node {
            id
            resourceName
          }
        }
      }
    }
  `)

  console.log('work items ', workItems)

  const BuildingIcon = (
    <FontAwesomeIcon className="work-item__icon" icon="building" size="2x" />
  )
  const iconBackground = { background: 'rgb(255, 255, 255)', color: '#fff' }

  /**
  return (
    <div className="work" id="our-work">
      <h2 className="title title--article title--center">Naša práca</h2>
      <VerticalTimeline>
        {workItems.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}

        <WorkItem />
        <WorkItem />
        <WorkItem />
      </VerticalTimeline>
    </div>
  )
   **/
  return (
    <div className="work">
      <h2 className="title title--article title--center">Naša práca</h2>
      <VerticalTimeline>
        <WorkItem />
        <WorkItem />
        <WorkItem />
      </VerticalTimeline>
    </div>
  )
}
export default Work