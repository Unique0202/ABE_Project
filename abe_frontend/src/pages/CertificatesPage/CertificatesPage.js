import React from 'react';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Certificate from '../../components/Certificate/Certificate';
import './CertificatesPage.css';

const CertificatesPage = () => {
  const certificates = [
    {
      id: 1,
      image: 'https://images.pexels.com/phots/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'ISO 9001:2015',
      issuedBy: 'International Organization for Standardization',
      date: 'January 15, 2022',
      description: 'Certifies that our quality management system meets international standards for quality, efficiency, and customer satisfaction.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8297150/peels-photo-8297150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'ISO 14001:2015',
      issuedBy: 'International Organization for Standardization',
      date: 'March 10, 2022',
      description: 'Certifies that our environmental management system meets international standards for environmental responsibility and sustainability.'
    },
    {
      id: 3,
      image: 'https://images.pxels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'ISO 45001:2018',
      issuedBy: 'International Organization for Standardization',
      date: 'May 22, 2022',
      description: 'Certifies that our occupational health and safety management system meets international standards for workplace safety.'
    },
    {
      id: 4,
      image: 'https://images.pxels.com/photos/8297367/pexels-photo-8297367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'API Q1',
      issuedBy: 'American Petroleum Institute',
      date: 'July 5, 2022',
      description: 'Certifies that our quality management system meets the specific requirements of the American Petroleum Institute for the oil and gas industry.'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/645754/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'API 6D',
      issuedBy: 'American Petroleum Institute',
      date: 'September 18, 2022',
      description: 'Certifies that our pipeline valves meet the requirements of the American Petroleum Institute for design, manufacturing, and testing.'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/phoos/8297367/pexels-photo-8297367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'ASME Section VIII',
      issuedBy: 'American Society of Mechanical Engineers',
      date: 'November 30, 2022',
      description: 'Certifies that our pressure vessels meet the requirements of the American Society of Mechanical Engineers for design, fabrication, and inspection.'
    }
  ];

  return (
    <>
      <Hero
        title="Our Certificates"
        subtitle="Industry certifications that demonstrate our commitment to quality and excellence"
        backgroundImage="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section certificates-section">
        <div className="container">
          <SectionHeader 
            title="Quality Certifications" 
            subtitle="Our commitment to excellence is validated by these industry-recognized certifications" 
          />
          
          <div className="certificates-intro" data-aos="fade-up">
            <p>
              At ABE Engineering, we are committed to maintaining the highest standards of quality, safety, and environmental responsibility in all our operations. Our certifications from leading industry organizations validate our commitment to excellence and provide our clients with confidence in our products and services.
            </p>
          </div>
          
          <div className="certificates-grid grid-3">
            {certificates.map(certificate => (
              <Certificate
                key={certificate.id}
                image={certificate.image}
                title={certificate.title}
                issuedBy={certificate.issuedBy}
                date={certificate.date}
                description={certificate.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section certificate-benefits-section">
        <div className="container">
          <SectionHeader 
            title="Why Our Certifications Matter" 
            subtitle="The value of working with a certified company" 
          />
          
          <div className="benefits-grid grid-2" data-aos="fade-up">
            <div className="benefit-item">
              <h3>Quality Assurance</h3>
              <p>Our certifications demonstrate our commitment to maintaining high-quality standards in all our products and services, ensuring consistent quality and reliability for our clients.</p>
            </div>
            <div className="benefit-item">
              <h3>Safety Compliance</h3>
              <p>Our safety certifications validate our commitment to maintaining a safe working environment for our employees and ensuring that our products and services meet safety standards.</p>
            </div>
            <div className="benefit-item">
              <h3>Environmental Responsibility</h3>
              <p>Our environmental certifications demonstrate our commitment to minimizing our environmental impact and promoting sustainability in all our operations.</p>
            </div>
            <div className="benefit-item">
              <h3>Industry Recognition</h3>
              <p>Our certifications from leading industry organizations provide third-party validation of our expertise and capabilities in the oil and gas industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section certificate-cta-section">
        <div className="container">
          <div className="certificate-cta-content" data-aos="zoom-in">
            <h2>Need More Information?</h2>
            <p>Contact us to learn more about our certifications and how they benefit our clients.</p>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificatesPage;