import React from "react";
import jsLogo from "../../content/images/js.png";
import reactLogo from "../../content/images/react.png";
import gatsbyLogo from "../../content/images/gatsby.png";
import netlifyLogo from "../../content/images/netlify.png";
import jestLogo from "../../content/images/jest.png";
import nodeLogo from "../../content/images/node.png";


const Tech = () => {
  const data = [
    {
      name: "Javascript",
      logo: jsLogo,
      alt: "javascript-logo"
    },
    {
      name: "NodeJS",
      logo: nodeLogo,
      alt: "nodejs-logo"
    },
    {
      name: "React",
      logo: reactLogo,
      alt: "react-logo"
    },

    {
      name: "Gatsby",
      logo: gatsbyLogo,
      alt: "gatsby-logo"
    },
    {
      name: "Netlify",
      logo: netlifyLogo,
      alt: "netlify-logo"
    },

    {
      name: "Jest",
      logo: jestLogo,
      alt: "jest-logo"
    }
  ];

  return (
    <div className="tech-gradient">
      <div className="tech-wrapper container">
        <div className="tech-text">
          <p>
            I am always learning new languages, frameworks, and tooling, such
            as...
          </p>
        </div>
        <div className="tech-icon-wrapper">
          {data.map(data => (
            <div key={data.name} className="tech-icon-box">
              <img className="icon" src={data.logo} alt={data.alt} />
              <span className="tech-icon-box-text">{data.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
