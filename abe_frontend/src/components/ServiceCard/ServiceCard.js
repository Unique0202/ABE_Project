import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card" data-aos="fade-up">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      {/* <a href="#" className="service-link">
        Learn More <FaArrowRight className="arrow-icon" />
      </a> */}
    </div>
  );
};

export default ServiceCard;