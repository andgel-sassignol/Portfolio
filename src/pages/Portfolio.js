// Portfolio.jsx

import React from 'react';
import '../scss/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="Portfolio" id='portfolio'>
      <h1>Projets</h1>
      <div className="projects">
        <div className="project">
          <img src="https://placeimg.com/640/480/tech" alt="Project 1" />
          <h2>Project 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="project">
          <img src="https://placeimg.com/640/480/tech" alt="Project 2" />
          <h2>Project 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="project">
          <img src="https://placeimg.com/640/480/tech" alt="Project 3" />
          <h2>Project 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
