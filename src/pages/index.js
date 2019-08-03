import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import GitHubButton from 'react-github-btn'
import Layout from "../components/layout";
import PostListing from "../components/PostListing";
import SimpleListing from "../components/SimpleListing"
import ProjectListing from "../components/ProjectListing"
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import Header from '../components/Header'
import Tech from '../components/Tech'
import projects from '../../data/projects'
import '../styles/main.scss'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    return (
      <Layout>
        <div id="main-content container">
          <Helmet title={`${config.siteTitle} | Developer & Writer`} />
          <SEO />
          <Header />
          <div id="about" className="container about">
            <h3 className="about-heading">{`about me`}</h3>
            <br />
            <div className="about-text">
              <p>
                {`I am a freelance web developer based in Fort Worth, Texas. I
                  have a passion for web development, music, and coffee. I am a music
                  educator by day, and a developer by night. I am fascinated by engineering
                  complex apps. I love learning new technologies and sharing knowledge
                  I have learned with others.`}
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/ChrisMGDev"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @ChrisMGDev
                  </a>
                  <GitHubButton href="https://github.com/chrismgonzalez" data-size="large" data-show-count="true" aria-label="Follow @chrismgonzalez on GitHub">Follow</GitHubButton></div>
              </div>
            </div>
          </div>
          <div className = "container front-page">
            <section className="section">
              <h2 className="posts-heading">Latest Articles</h2>
              <PostListing simple postEdges={latestPostEdges} />
            </section>

          </div>
          <Tech />
          <div className="container">
            <h2 className="projects-heading">{`Open Source`}</h2>
            <ProjectListing projects={projects} />
          </div>
        </div>
      </Layout>
    );
  }
}


/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
