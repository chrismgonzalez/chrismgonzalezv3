import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Navigation from './Navigation'
import Footer from './Footer'
import config from '../../data/SiteConfig'
import favicon from '../../content/images/favicon.png'
import '../styles/main.scss'

export default class MainLayout extends Component {
  render () {
    const { children } = this.props

    return (
    <>
      <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
    </>
    )
  }
}

