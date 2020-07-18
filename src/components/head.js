import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ pageTitle }) => {
  const { site: { siteMetadata: { title }}} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${pageTitle} | ${title}`}></Helmet>
  )
}

export default Head
