import React from "react"

import Layout from "../components/layout"
import Head from "../components/head" 

const ContactPage = () => {
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact</h1>
      <p>
        Find in in instagram {" "}
        <a href="https://www.instagram.com/al.bertorio" target="_blank" rel="noreferrer">
          @al.bertorio
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
