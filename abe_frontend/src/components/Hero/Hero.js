import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, backgroundImage, buttonText, buttonLink }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="btn btn-secondary">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;