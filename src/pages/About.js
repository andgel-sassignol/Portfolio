import React from 'react';
import '../scss/About.scss';

const About = () => {
  return (
    <div className="About" id="about">
      <h1 className="About__title">À propos de moi</h1>
      <p className="About__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero vel enim lacinia commodo. Nam eleifend est sit amet tortor bibendum, nec commodo ante convallis. Duis eget nisl pharetra, consequat leo ac, posuere urna. Donec venenatis molestie sapien, vel laoreet dolor luctus ac.</p>
      <p className="About__text">Nulla sit amet ex vel enim lobortis lobortis. Proin fringilla malesuada eleifend. Fusce lobortis congue sem et euismod. Proin blandit nunc eu augue elementum, a consequat sapien feugiat. Praesent hendrerit malesuada ipsum, sed gravida felis blandit id.</p>
    </div>
  );
};

export default About;
