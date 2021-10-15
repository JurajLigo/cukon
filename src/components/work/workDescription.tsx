import * as React from 'react'
import { DescriptionItem } from '../../templates/detail'
import './workDescription.scss'

export interface WorkDescriptionProps {
  title: string
  descriptions: DescriptionItem[]
}

export const WorkDescription = (props: WorkDescriptionProps) => {
  return (
    <article className="base-container work-description">
      <div className="article__text-wrapper">
        <h2 className="title title--article title--center">{props.title}</h2>
        <table className="work-description__table">
          {props.descriptions.map(item => {
            return (
              <tr>
                <td>
                  <strong>{item.label}:</strong>
                </td>
                <td>{item.value}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </article>
  )
}
