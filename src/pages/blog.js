import React from 'react'
import Layout from '../components/Layout'
import {Link, graphql, useStaticQuery} from 'gatsby'

import * as blogStyles from './blog.module.scss'


export default function Blog() {


    const data = useStaticQuery(graphql`

    query{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
                    }
                    fields{
                        slug
                    }
                }
            
            }
        }



              
    }


    `)


    console.log(data)
    return (
        <Layout>
            <h1>My blog</h1>
            <p>Here is a list of all posts!</p>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return (
                        <li className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                            
                            

                        </li>

                    )

                })}
            </ol>            
        </Layout>
    )
}
