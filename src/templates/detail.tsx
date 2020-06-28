import * as React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Article } from '../components/article/article'

export interface DetailData {
  data: {
    detailsJson: {
      name: string;
      location: string;
      video: string;
      architect: string;
      description: DescriptionItem[]
    }
  }
}

export interface DescriptionItem {
  value: string;
}

export default (data: DetailData) => {

  const props = data.data.detailsJson;

  const DetailInfo = (
    <ul>
      <li>Popis: 8 bytových domov</li>
      <li>Podlažnosť: 4 až 7 podlaží</li>
      <li>Nosný systém: stenový</li>
      <li>Materál: železobetón</li>
    </ul>
  );

  return (
    <Layout>
      <Article
        content={DetailInfo}
        title="Popis"
        videoPath={props.video}
      />
    </Layout>
  )
};


export const query = graphql`
  query($id: String!) {
    detailsJson(id: { eq: $id }) {  
      name
      location
      architect
      video
      descriptions {
        value
      }
    }
  }`