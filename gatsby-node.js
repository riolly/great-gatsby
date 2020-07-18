
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`src/Templates/blog.js`)

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)
  
  result.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogTemplate,
      context: {
        slug: node.slug
      }
    })
  });
}