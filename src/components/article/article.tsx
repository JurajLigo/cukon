import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import './article.scss'

export interface ArticleProps {
  title: string
  content: React.ReactNode
  image?: FluidObject
  videoPath?: string
}

export const Article = (props: ArticleProps) => {
  return (
    <article className="article base-container">
      <div className="article__text-wrapper">
        <h2 className="title title--article">{props.title}</h2>
        <div>{props.content}</div>
      </div>
      <div className="article__image-wrapper">
        {props.image && <Img fluid={props.image} className="article__image" />}
        {props.videoPath && (
          <iframe className="article__video" src={props.videoPath}></iframe>
        )}
      </div>
    </article>
  )
}
