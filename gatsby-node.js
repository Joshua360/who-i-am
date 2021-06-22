const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions


    if(node.internal.type === 'MarkdownRemark'){

        const slug = path.basename(node.fileAbsolutePath, '.md');
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
    // Transform the new node here and create a new node or
    // create a new node field.
  }


  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/single-blog-post.js`)
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                    fields{
                        slug
                    }
                    }
                }
            }
        }
    `)

    // console.log(res);


    res.data.allMarkdownRemark.edges.forEach(edge => {
      
        createPage({
            component:blogPostTemplate,
            path:`/blog/${edge.node.fields.slug}`,
            context:{
                slug:edge.node.fields.slug
            }
        })
      });
    


  }


