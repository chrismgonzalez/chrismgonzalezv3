import React from 'react'
import GitHubButton from 'react-github-btn'

export default class ProjectListing extends React.Component {
  render () {
    const { projects } = this.props
    return (
      <div className="projects">
        {projects.map(project => (
          <div key={project.title} className="each">
            <h2>
              <a href={project.source}>
                <div className="project-title">{project.title}</div>
              </a>
            </h2>
            <p>{project.description}</p>
            <div className="buttons">
              {project.path && (
                <a className="button" href={project.path} target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              )}
              <GitHubButton href={project.source} data-size="large" data-show-count="true">
                Source
              </GitHubButton>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
