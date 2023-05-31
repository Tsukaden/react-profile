import React from 'react';
import './project.css';

const Project = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div className="project">
      <img src={image} alt={"project preview"} />
      <h3>{title}</h3>
      <div>
        <a href={deployedLink}>Deployed Application</a>
        <a href={githubLink}>GitHub Repository</a>
      </div>
    </div>
  );
};

export default Project;