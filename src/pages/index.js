
import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'


const index = ()=> {

  return(
    <Layout>
      <h1>Hello</h1>
      <h2>My name is Joshua and I am a software engineer at Facebook, Safaricom and Oracle.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )

} 

export default index;

