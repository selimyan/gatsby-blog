import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'

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
      <ol className={blogStyles.posts}>
        {edges.map((edge) => {
          const { title, date } = edge.node.frontmatter
          const { slug } = edge.node.fields

          return (
            <li className={blogStyles.post}>
              <Link to={slug}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage