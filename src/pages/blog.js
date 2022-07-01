import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {edges.map((edge) => {
          const { title, date } = edge.node.frontmatter
          const { slug } = edge.node.fields

          return (
            <li>
              <h2>
                <Link to={slug}>
                  {title}
                </Link>
              </h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage