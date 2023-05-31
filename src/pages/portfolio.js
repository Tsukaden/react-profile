import React from 'react';
import Project from '../components/Project/project.js';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div>
        <Project
          title="Project 1"
          deployedLink={"https://group-3-marketplace.herokuapp.com/"}
          githubLink={"https://github.com/nshaw973/The-Marketplace"}
          image={"./../public/Marketplace.png"}
        />
      </div>
    </section>
  );
};

export default Portfolio;