import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">ABE Engineering</h3>
            <p>
              A leading provider of equipment, services, and solutions for the oil and gas industry.
              With a focus on quality, safety, and excellence, we deliver innovative solutions for our clients.
            </p>
            {/* <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div> */}
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/equipment">Equipment</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
              <li><Link to="/clients">Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>201/B, Silver Point Complex, Beside Hotel Express Lane, R.C. Dutt Road, Alkapuri, Vadodara-390005, Gujarat, India</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+91 97277 24402, +91 90993 80009, +91 98243 40597, +91 70160 56362</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>abeeng01@gmail.com, contact@abeengineerspvtltd.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ABE Engineering Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;