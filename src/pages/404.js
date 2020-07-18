import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout>
      <h1>Not Found</h1>
      <Link to="/">Got to Homepage</Link>
    </Layout>
  )
}

export default NotFound;