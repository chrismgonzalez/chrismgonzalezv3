import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <div id="main-content" class="container">
        <h1>Page not found</h1>
        <p><Link to="/">Head home</Link></p>
      </div>
    </Layout>
  )
}

export default NotFound
