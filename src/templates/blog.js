import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost (
      slug: {
        eq: $slug
        }
      ) {
      title
      publishedDate (
        formatString: "MMMM Do, YYYY"
      )
      body {
        raw
        references {
          gatsbyImageData
          contentful_id
          title
        }
      }
    }
  }
`

const Blog = (props) => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const { raw, references } = body
  const parsedBody = JSON.parse(raw)

  const options = {
    renderNode: {
      "embedded-asset-block": () => {
        const image = getImage(references[0].gatsbyImageData)
        const alt = references[0].title

        return <GatsbyImage alt={alt} image={image}/>
      }
    }
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(parsedBody, options)}
    </Layout>
  )
}

export default Blog