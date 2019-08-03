import React from 'react'
import '../styles/main.scss'
import TextType from './TextType'

export default class Header extends React.Component {
  render () {
    return (
      <div id="home" className="gradient">
        <div className="container header-wrapper">
          <div className="type-container">
            <TextType />
          </div>
        </div>
      </div>
    )
  }
}
