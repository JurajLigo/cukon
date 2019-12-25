import * as React from "react"
import BackgroundImage from 'gatsby-background-image'
import "./hero.scss"
import { FluidObject } from 'gatsby-image'

interface HeroProps {
  image: FluidObject;
  title: string;
  subtitle?: string;
}

export const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">{props.title}</h1>
        {props.subtitle && <h2 className="hero__subtitle">{props.subtitle}</h2>}
      </div>
      // @ts-ignore
      <BackgroundImage fluid={props.image} className="hero__background" />
    </>
    )
};
