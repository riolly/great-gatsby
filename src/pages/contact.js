import React from "react"

import Layout from "../components/layout"
import Head from "../components/head" 

const ContactPage = () => {
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/elonmusk" target="_blank" rel="noreferrer">
          @elonmusk
        </a>{" "}
        on Twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
