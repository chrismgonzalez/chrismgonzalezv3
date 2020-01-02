import React from 'react';
import config from '../../data/SiteConfig'

const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer-text">
        <a
          href="https://github.com/chrismgonzalez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://twitter.com/ChrisMGDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/cmgonzalez89/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="mailto:cmgonza89@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inbox
        </a>
        <a
          href="https://github.com/chrismgonzalez/chrismgonzalezv3"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>

      </div>
      <div class="footer-copyright">
        <p>{config.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
