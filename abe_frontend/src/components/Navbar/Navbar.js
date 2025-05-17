import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span>ABE</span> ENGINEERS PVT. LTD.
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/services" 
              className={`navbar-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/equipment" 
              className={`navbar-link ${location.pathname === '/equipment' ? 'active' : ''}`}
            >
              Equipment
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/certificates" 
              className={`navbar-link ${location.pathname === '/certificates' ? 'active' : ''}`}
            >
              Certificates
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/clients" 
              className={`navbar-link ${location.pathname === '/clients' ? 'active' : ''}`}
            >
              Clients
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;