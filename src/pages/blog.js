import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../components/head" 
import Layout from "../components/layout"
import s from './blog.module.scss'

const BlogPage = () => {
  const {
    allContentfulBlogPost: { nodes: blogPosts },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        nodes {
          slug
          title
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  `)

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog Posts</h1>
      <ol className={s.posts}>
      {
        blogPosts.map(post => {
          return (
            <li className={s.post}>
              <Link to={`/blog/${post.slug}`}>
                <h2>
                  {post.title}
                </h2>
                <p>
                  {post.publishedDate}
                </p>
              </Link>
            </li>
          )
        })
      }
      </ol>
    </Layout>
  )
}

export default BlogPage
