import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import logo from '../../static/logos/logo.png'
import '../styles/main.scss'

const Navigation = props => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
        title
      }
    }
  }
  `)

  const { menuLinks } = props

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="brand">
          <Link className="nav-text" to="/">
            <img src={logo} class="favicon"></img>
            <span className="brand-text">
              {data.site.siteMetadata.title}
            </span>
          </Link>
        </div>
        <div className="links">
          {menuLinks.map(link => (
            <span key={link.name}className="nav-text">
              <Link
                to={link.link}
              >
                {link.name}
              </Link>
            </span>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
