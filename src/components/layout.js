import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import config from '../../data/SiteConfig'

const Layout = props => {
  return (
    <div>
      <Navigation menuLinks={config.menuLinks} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
