import React, { Component } from 'react'
import chris from '../../content/images/Avatar.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={chris} alt="Chris Gonzalez" />
            </div>
            <div>
              <p>
                {`I'm Chris, I am web developer based in Fort Worth, Texas. I
        have a passion for web development, music, and coffee. I am a music
        educator by day, and a developer by night. I am fascinated by engineering
        complex apps. I love learning new technologies and sharing knowledge
        I have learned with others. I hope you found this content valuable!`}
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
