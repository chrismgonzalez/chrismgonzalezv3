import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'


const NotFound = () => {
  return (
    <Layout>
      <Helmet title={`404`}/>
      <div id="main-content" class="container">
        <h1>Page not found</h1>
        <p><Link to="/">Head home</Link></p>
      </div>
    </Layout>
  )
}

export default NotFound
