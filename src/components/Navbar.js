import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';
import '../scss/Navbar.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container">
        <a href='https://andgel-sassignol.github.io/Portfolio'>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="container__title">
          <a href='https://andgel-sassignol.github.io/Portfolio'>
            <h1>Portfolio</h1>
          </a>
        </div>
        <ul className="menu">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="acquis"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Acquis
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
