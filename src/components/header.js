import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import s from "./header.module.scss"

const Header = () => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={s.header}>
      <h1>
        <Link className={s.title} to="/">
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul className={s.navList}>
          <li>
            <Link
              className={s.navItem}
              activeClassName={s.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={s.navItem}
              activeClassName={s.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={s.navItem}
              activeClassName={s.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={s.navItem}
              activeClassName={s.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
