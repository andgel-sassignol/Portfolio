import React from 'react';
import '../scss/About.scss';

const About = () => {
  return (
    <div className="About" id="about">
      <div className='container'>
        <h1 className="About__title">À propos de moi</h1>
        <p className="About__text">Je suis Andgel SASSIGNOL étudiant en deuxième année de BTS SIO <b>Services Informatiques aux Organisations</b> option SISR <b>Solutions Infrastructures Systèmes et Réseaux</b> au lycée Le Castel à Dijon.</p>
        <a href='https://drive.google.com/file/d/1WhiNRYCjZFXNRypVLWmbUJ-K5sfJaysy/view?usp=sharing'>
          <div className="button">
            <p>CV</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
