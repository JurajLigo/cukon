import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import './aboutUs.scss'

export interface AboutUsProps {
  title: string
  image?: FluidObject
}

export const AboutUs = (props: AboutUsProps) => {
  return (
    <article className="about-us base-container">
      <div className="about-us__text-wrapper">
        <h2 className="title title--article">{props.title}</h2>
        <div>
          <br />
          Naša firma sa zameriava na návrh nosných konštrukcií železobetónových
          a murovaných budov s využitím numerických a optimalizačných metód
          s cieľom o bezpečný a ekonomický návrh.
          <p className="about-us__paragraph">
            Projektová dokumentácia je spracovaná v BIM, pomocou 3D softvéru
            REVIT, kde spĺňame BIM Level of Development 400 (LOD 400).
          </p>
          <p className="about-us__paragraph">
            SOFiSTiK BIM workflow nástroje nám umožňujú naplno využiť REVIT pre
            nastavenie analytického modelu bez dodatočných úprav v samotnom MKP
            programe
          </p>
          <p className="about-us__paragraph">
            Používanie grafického programovacieho rozhrania Dynamo a Python
            programovania nám pomohlo vytvoriť vlastné REVIT Add-Ins a Dynamo
            Makrá ,čo nám zvyšuje efektivitu našej práce a zároveň pomáha vyhnúť
            sa chybám.
          </p>
          <p className="about-us__paragraph">
            Aplikovaním generatívneho dizajnu, ktorý je súčasť rozhrania Dynamo,
            sa dajú hľadať optimálne riešenia pri návrhu nosných konštrukcií
            budov.
          </p>
        </div>
      </div>
      <div className="about-us__image-wrapper">
        {props.image && <Img fluid={props.image} className="about-us__image" />}
      </div>
    </article>
  )
}
