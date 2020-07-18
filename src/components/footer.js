import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import s from './footer.module.scss';

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={s.Footer}>
      <p>Created by {author} © 2020</p>
    </footer>
  )
}

export default Footer
