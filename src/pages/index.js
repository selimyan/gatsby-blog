import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to TuoyTuoy's blog.</h1>
      <Link to="/about">Who dat Tuoy?</Link>
    </Layout>
  )
}

export default IndexPage