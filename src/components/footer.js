import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import * as footerStyles from './footer.module.scss'

const Footer = ()=> {


    const data = useStaticQuery(graphql`

    query{
        site{
            siteMetadata{
                    author
                } 
            }
        }
    `)


    return (
      
            <div className={footerStyles.footer}>
                Copyright 2021. {data.site.siteMetadata.author}
            </div>
        
    )
}


export default Footer;