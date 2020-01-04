import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log('DATA ', data);

  return (
    <Layout>
      <div>
        <h1>afsdf</h1>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    detailsJson(id: { eq: $id }) {  
      email
    }
  }`