import * as React from 'react'
import BackgroundImage from 'gatsby-background-image'
import './hero.scss'
import { FluidObject } from 'gatsby-image'
import { HeroImage } from './HeroImage'

interface HeroProps {
  image?: FluidObject
  fileName?: string
  title: string
  subtitle?: string
  secondSubtitle?: string
}

export const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">{props.title}</h1>
        {props.subtitle && <h2 className="hero__subtitle">{props.subtitle}</h2>}
        {props.secondSubtitle && (
          <h2 className="hero__subtitle">{props.secondSubtitle}</h2>
        )}
      </div>
      // @ts-ignore
      {props.image && (
        <BackgroundImage fluid={props.image} className="hero__background" />
      )}
      {props.fileName && <HeroImage filename={props.fileName} />}
    </>
  )
}
