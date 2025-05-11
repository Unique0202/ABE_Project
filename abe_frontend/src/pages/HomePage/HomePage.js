import React from 'react';
import { FaIndustry, FaTools, FaOilCan, FaWrench } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ClientLogo from '../../components/ClientLogo/ClientLogo';
import './HomePage.css';

const HomePage = () => {
  const services = [
    {
      icon: <FaIndustry />,
      title: 'Industrial Equipment Supply',
      description: 'We provide high-quality industrial equipment for oil and gas operations, including pumps, valves, and specialized machinery.'
    },
    {
      icon: <FaTools />,
      title: 'Maintenance Services',
      description: 'Our skilled technicians offer comprehensive maintenance services to keep your equipment running at optimal efficiency.'
    },
    {
      icon: <FaOilCan />,
      title: 'Oil & Gas Solutions',
      description: 'Specialized solutions for upstream, midstream, and downstream oil and gas operations to maximize productivity.'
    },
    {
      icon: <FaWrench />,
      title: 'Custom Engineering',
      description: 'Custom engineering services tailored to your specific needs, designed by our team of experienced engineers.'
    }
  ];

  const clients = [
    {
      logo: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&h=350',
      name: 'Shell'
    },
    {
      logo: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&h=350',
      name: 'ExxonMobil'
    },
    {
      logo: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&h=350',
      name: 'BP'
    },
    {
      logo: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&h=350',
      name: 'Chevron'
    }
  ];

  return (
    <>
      <Hero
        title="Advanced Solutions for the Oil & Gas Industry"
        subtitle="ABE Engineering delivers high-quality equipment, services, and solutions for the oil and gas industry worldwide."
        backgroundImage="https://images.pexels.com/photos/2581087/pexels-photo-2581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Discover Our Services"
        buttonLink="/services"
      />

      <section className="section about-section">
        <div className="container">
          <div className="about-home-content">
            <div className="about-home-text" data-aos="fade-right">
              <SectionHeader 
                title="About ABE Engineering" 
                subtitle="A trusted partner in the oil and gas industry for over two decades" 
              />
              <p>
                ABE Engineering Pvt. Ltd. is a leading provider of equipment, services, and solutions for the oil and gas industry. With a focus on quality, safety, and innovation, we have established ourselves as a trusted partner for companies around the world.
              </p>
              <p>
                Our team of experienced engineers and technicians is dedicated to delivering excellence in every project, ensuring that our clients receive the highest level of service and support.
              </p>
              <a href="/about" className="btn btn-primary mt-3">Learn More About Us</a>
            </div>
            <div className="about-home-image" data-aos="fade-left">
              <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="ABE Engineering Facility" />
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive solutions for the oil and gas industry" 
          />
          <div className="services-grid grid-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Ready to Elevate Your Operations?</h2>
            <p>Contact our team today to discuss how we can help you achieve your goals.</p>
            <a href="/contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">50+</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section clients-section">
        <div className="container">
          <SectionHeader 
            title="Our Clients" 
            subtitle="Trusted by industry leaders worldwide" 
          />
          <div className="clients-grid grid-4">
            {clients.map((client, index) => (
              <ClientLogo
                key={index}
                logo={client.logo}
                name={client.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;