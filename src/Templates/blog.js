import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import Head from "../components/head" 

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug } ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const blog = ({ data : { contentfulBlogPost: blogPost }}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
  return (
    <Layout>
      <Head pageTitle={blogPost.title} />
      <h1>{blogPost.title}</h1>
      <p>{blogPost.publishedDate}</p>
      {documentToReactComponents(blogPost.body.json, options)}
    </Layout>
  )
}

export default blog
