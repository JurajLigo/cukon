const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `JsonFilesJson`) {
        const slug = createFilePath({ node, getNode, basePath: `json-files` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
      allDetailsJson {
        edges {
          node {
            id
            resourceName
          }
        }
      }
    }
  `)

    console.log('JSON ', result);

    result.data.allDetailsJson.edges.forEach(({ node }) => {
        createPage({
            path: node.resourceName,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                id: node.id,
            },
        })
    })
}