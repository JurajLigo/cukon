import * as React from "react"
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
        {props.subtitle && <h2 className="hero__subtitle">{props.subtitle}</h2>}
      </div>
      <HeroImage filename={props.filename} />
    </>
    )
};
