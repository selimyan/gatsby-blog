import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h2>You're lost</h2>
      <Link to='/'>
        Go home
      </Link>
    </Layout>
  )
}

export default NotFound