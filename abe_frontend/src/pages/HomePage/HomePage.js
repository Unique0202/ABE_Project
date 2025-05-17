import React from 'react';
import { FaIndustry, FaTools, FaOilCan, FaWrench, FaCog, FaChartLine, FaShieldAlt, FaHandsHelping, FaArrowRight } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ClientLogo from '../../components/ClientLogo/ClientLogo';
import './HomePage.css';

const HomePage = () => {
  const services = [
    {
      icon: <FaOilCan />,
      title: 'GAS/LIQUID FLOW METERING SYSTEMS',
      description: 'We provide GAS/LIQUID Metering Systems with Design, Fabrication, Installation and Commissioning solutions for custody Transfer Flow Measurement in the world wide Oil & Gas Industry. Our team is trained and expert in various flow computers and meters like Emerson, Omni, Thermo-Fisher etc'
    },
    {
      icon: <FaIndustry />,
      title: 'INDUSTRIAL AUTOMATION',
      description: 'We assure to execute any job with highly experienced team who has expertise on renowned industrial platform like Emerson, Mitsubishi, GE, Rockwell, Siemens and Schneider. Our team has 25+ man years of experience on SCADA, MES and IT applications makes sure that we understand Automation and IT business process and deliver the right solution to our customer.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'MANPOWER SUPPLY',
      description: 'We prrovide skilled and unskilled manpower on man-day basis for Instumentation & Electrical jobs, Chemical Engineering and Hydrocarbon Industries.'
    },
    {
      icon: <FaWrench />,
      title: 'ENGINEERING & CONSULTANCY',
      description: 'Instrumentation & Electrical Datasheets and Specifications, Instrument Sizing Calculations, Junction Box & Cable Schedule. Instrument Loop & Hook Up Drawings, Cable Tray Layouts, Electrical Single Line Diagram.'
    },

  ];

  const clients = [
    {
      id: 1,
      name: 'ABB Ltd.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScIghZJCd7WFx6f3jIQ9A_eWu6tbJGoXzh-A&s'
    },
    {
      id: 2,
      name: 'GAIL Ltd.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/GAIL.svg/1200px-GAIL.svg.png'
    },
    {
      id: 3,
      name: 'Adani Group',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/1200px-Adani_logo_2012.svg.png'
    },
    {
      id: 4,
      name: 'Indian Oil Corporation',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhaQg53BFHnnMqAdIVglqc8veBBFVCo6a7g&s'
    },
    {
      id: 5,
      name: 'ONGC India',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png'
    },
    {
      id: 6,
      name: 'Hindustan Petroleum',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Hindustan_Petroleum_Logo.svg/1200px-Hindustan_Petroleum_Logo.svg.png'
    },
    {
      id: 7,
      name: 'Emerson Electric Co',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Emerson_Electric_Company.svg/1200px-Emerson_Electric_Company.svg.png'
    },
    {
      id: 8,
      name: 'Bridge & Roof Co. (I) Ltd.',
      logo: 'https://www.bridgeroof.co.in/assets/images/BnR_logo_png.png'
    },
    {
      id: 9,
      name: 'Linde plc',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYkpVk0GdhCyUF75LR0566wJ2IWSspuggSQ&s'
    },
    {
      id: 10,
      name: 'Petronet LNG',
      logo: 'https://www.petronetlng.in/documents/699827/0/petronet-logo.png/7af6b59b-8521-05c0-8a52-70536cef807f?t=1716470155852'
    },
    {
      id: 11,
      name: 'Honeywell International, Inc.',
      logo: 'https://mma.prnewswire.com/media/276137/honeywell_logo.jpg?p=facebook'
    },
    {
      id: 12,
      name: 'Gujarat State Pharmacy Council',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRs2I7q3pNQJsAgryefbf6_s1oqjBqRXBXSQ&s'
    }
  ];

  return (
    <>
      <Hero
        title="Advanced Solutions for the Oil & Gas Industry"
        subtitle="ABE Engineering delivers high-quality equipment, services, and solutions for the oil and gas industry worldwide."
        backgroundImage="https://media.licdn.com/dms/image/v2/D4E12AQHJCl0A6d4DXA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1660896625599?e=2147483647&v=beta&t=vbItAQYNP59qnyXeNDTmzUostpkeTjv25jkRom11aoY"
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
          <a href="services" className="service-link">
            View More <FaArrowRight className="arrow-icon" />
          </a> 
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
              <div className="stat-number">20+ YEARS</div>
              <div className="stat-label">OF EXPERIENCE IN THE INDUSTRY</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">85+</div>
              <div className="stat-label">CORPORATE CLIENTS</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">12,000 SQ.FT</div>
              <div className="stat-label">WORK SHOP FABRICTION AREA</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-number">24,000 SQ.FT</div>
              <div className="stat-label">OPEN PLOT AREA</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-number">200+</div>
              <div className="stat-label">DEDICATED AND HARDWORKING TEAM</div>
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
          <div className="clients-logo-grid">
            {clients.map(client => (
              <div key={client.id} className="clients-logo" title={client.name}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
          <a href="clients" className="client-link">
            View More <FaArrowRight className="arrow-icon" />
          </a> 
        </div>
      </section>
    </>
  );
};

export default HomePage;