import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/logos/logo.png'
import '../styles/main.scss'

export default class Navigation extends React.Component {
  render() {

    const { menuLinks } = this.props

    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link className="nav-text" to="/">
              <img src={logo} class="favicon"></img>
              <span className="brand-text">Chris Gonzalez</span>
            </Link>
          </div>
          <div className="links nav-text">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}

