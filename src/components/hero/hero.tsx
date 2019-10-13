import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from  "gatsby-background-image"
import "./hero.scss"
import { HeroImage } from "./HeroImage"

interface HeroProps {
  filename: string;
  title: string;
  subtitle?: string;
}

export const Hero = (props: HeroProps) => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__title">{props.title}</h1>
        {props.subtitle && <h2 className="hero__subtitle">Projekčná činnosť</h2>}
      </div>
      <HeroImage filename={props.filename} />
    </>
    )
};
