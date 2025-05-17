import React from 'react';
import { FaIndustry, FaTools, FaOilCan, FaWrench, FaCog, FaChartLine, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './ServicesPage.css';

const ServicesPage = () => {
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
    {
      icon: <FaCog />,
      title: 'ERECTION & COMMISSIONING & CALIBRATION OF PROCESS CONTROL INSTRUMENTS', 
      description: 'We are Specialized in Erection & Commissioning of Gas metering Skids. Erection, commisssioning & calibration of process control instruments.'
    },
    {
      icon: <FaChartLine />,
      title: 'CALIBRATION LAB',
      description: 'We undertake all types of calibration, Testing, Loop Checking work onsite and offsite, as per your requirement. Calibration of process control Instruments like Temperature gauge, Pressure gauge, Differential pressure gauge, level transmitter and everything else mentioned under over calibration lab'
    },
    {
      icon: <FaTools />,
      title: 'MECHANICAL ENGINEERING',
      description: 'We provide mechanical engineering services including design, analysis, and optimization of mechanical systems. Our team ensures that all mechanical components are designed to meet industry standards and client specifications.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'EQUIPMENT HEALTH CHECK-UP',
      description: 'We offer comprehensive equipment health check-up services to ensure the reliability and efficiency of your systems. Our experts conduct thorough inspections and diagnostics to identify potential issues before they become critical.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed consultation to understand your specific needs, challenges, and objectives.'
    },
    {
      number: '02',
      title: 'Assessment & Planning',
      description: 'Our experts conduct a thorough assessment and develop a comprehensive plan tailored to your requirements.'
    },
    {
      number: '03',
      title: 'Solution Implementation',
      description: 'We implement the agreed solution with precision, attention to detail, and adherence to industry standards.'
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and testing ensure that all work meets our high standards and your expectations.'
    },
    {
      number: '05',
      title: 'Ongoing Support',
      description: 'We provide continuous support and maintenance to ensure optimal performance and longevity of your equipment.'
    }
  ];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions for the oil and gas industry"
        backgroundImage="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section services-overview-section">
        <div className="container">
          <SectionHeader 
            title="What We Do" 
            subtitle="Expert solutions for every aspect of your oil and gas operations" 
          />
          
          <div className="services-overview-content">
            <p className="services-intro" data-aos="fade-up">
              At ABE Engineers pvt ltd also undertakes tge Turnkey job of Erection and commissioning calibration jobs. We have successfully completed many jobs of Erection and Gas Metering Skids, flow computers, Gas Chromatography Skids of their many sites.
            </p>
            
            <div className="services-grid grid-3">
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
        </div>
      </section>

      <section className="section service-process-section">
        <div className="container">
          <SectionHeader 
            title="Our Process" 
            subtitle="A structured approach to delivering exceptional results" 
          />
          
          <div className="process-timeline" data-aos="fade-up">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-number">{step.number}</div>
                <div className="process-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-content grid-2">
            <div className="service-cta-text" data-aos="fade-right">
              <h2>Ready to Optimize Your Operations?</h2>
              <p>Contact us today to discuss how our services can help you achieve your goals and overcome challenges in the oil and gas industry.</p>
              <a href="/contact" className="btn btn-secondary">Request a Consultation</a>
            </div>
            <div className="service-cta-image" data-aos="fade-left">
              <img src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Oil and Gas Facility" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;