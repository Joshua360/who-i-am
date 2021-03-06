import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import * as layoutStyles from './layout.module.scss'


import '../styles/index.scss'

const Layout = (props)=> {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
            
        </div>
    )
}



export default Layout;