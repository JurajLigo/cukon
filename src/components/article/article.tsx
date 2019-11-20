import * as React from 'react'
import { Image } from '../img/Image'
import './article.scss'

export interface ArticleProps {
  title: string
  text: string
  imagePath?: string
  videoPath?: string
}

export const Article = (props: ArticleProps) => {
  return (
    <article className="article base-container">
      <div className="article__image-wrapper">
        {props.imagePath && (
          <Image filename={props.imagePath} classname="article__image" />
        )}
        {props.videoPath && (
          <iframe className="article__video" src={props.videoPath}></iframe>
        )}
      </div>
      <div className="article__text-wrapper">
        <h2 className="title title--article">{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </article>
  )
}
