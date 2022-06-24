import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About TuoyTuoy</h1>
      <p>Misterious creature that tends to drown itself when hurt.</p>
      <p>Click to <Link to="/contact">contact</Link> Tuoy.</p>
    </Layout>
  )
}

export default AboutPage