// Portfolio.jsx

import React from 'react';
import logogsb from '../assets/logogsb.png';
import logodoriath from '../assets/logodoriath.png';
import logosdis from '../assets/logosdis.png';
import '../scss/Projects.scss';

const Projects = () => {
  return (
    <div className="Projects" id='projects'>
      <div className='container'>
      <h1>Projets</h1>
      <div className="projects-box">
        <a href='https://www.canva.com/design/DAFfONNIqzs/Zrl3n3jrZgxEqQJ2eYSIjQ/view?utm_content=DAFfONNIqzs&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu'>
          <div className="project-item">
            <img src={logogsb} alt="Logo GSB" />
            <h2>Projet GSB partie 3</h2>
            <p>Projet de 2ème année de BTS : Galaxy Swiss Bourdin. Dockerisation d'une application PHP</p>
          </div>
        </a>
        <a href='https://docs.google.com/presentation/d/1TvMSw9hpfrHBrU36JL0B9s9eCK3cVRtTI4C32KwW2So/edit?usp=sharing'>
          <div className="project-item">
            <img src={logosdis} alt="Logo SDIS29" />
            <h2>Projet SDIS29</h2>
            <p>Nous avons mit en place plusieurs serveurs, aussi que de la supervisions et playbook Ansible pour différents services (Git, Nagios, DokuWiki)</p>
          </div>
        </a>
        <a href='https://docs.google.com/presentation/d/19AT65Ys-dhCrTXt5wIFSjFWIuIG2u_54/edit?usp=sharing&ouid=100390670226066812549&rtpof=true&sd=true'>
          <div className="project-item">
            <img src={logogsb} alt="Logo GSB" />
            <h2>Projet GSB partie 2</h2>
            <p>Mise en place d'un serveur GIT, GLPI, d'un Wordpress et de l'automatisation d'un DokuWiki. Par la suite, sécurisation avec fail2ban, minimisation des ports ouverts et services installés</p>
          </div>
        </a>
      </div>
      <div className="projects-box">
        <a href='https://docs.google.com/presentation/d/1JbqfQceZP_UirUUxLjzi37ma_qIOlw37/edit?usp=sharing&ouid=100390670226066812549&rtpof=true&sd=true'>
          <div className="project-item">
            <img src={logogsb} alt="Logo GSB" />
            <h2>Projet GSB partie 1</h2>
            <p>Mise en place d'un serveur AP22 avec DokuWiki, MariaDB et Adminer. Création d'un accès distant pour les développeurs et un systèmes de sauvegardes régulières ainsi qu'un script de restauration d'une base de données</p>
          </div>
        </a>
        <a href='https://drive.google.com/file/d/1x_LtMjMTUu5aYb7Rv8sBWd-zvXUXW5zV/view?usp=sharing'>
          <div className="project-item">
            <img src={logodoriath} alt="Logo Doriath" />
            <h2>Projet Doriath</h2>
            <p>Premiers projet de groupe pour découvrir le labo réseau. Mise en place d'un intranet avec base de données</p>
          </div>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Projects;
