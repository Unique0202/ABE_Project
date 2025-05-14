import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['201/B, Silver Point Complex', 'Beside Hotel Express Lane', 'R.C. Dutt Road, Alkapuri', 'Vadodara-390005, Gujarat', 'India']
    },
    {
      icon: <FaPhone />,
      title: 'Phone Numbers',
      details: ['Bhavesh Kakdiya(Director): +91 97277 24402', 'Nitin Mehta(Director): +91 98243 40597', 'Devendrasinh Jadeja(Director): +91 90993 80009', 'Yuvrajsinh Gohil(Director): +91 70160 56362']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      details: ['abeeng01@gmail.com', 'contact@abeengineerspvtltd.com']
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
    }
  ];

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, support, or information"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section contact-info-section">
        <div className="container">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="We're here to help and answer any questions you may have" 
          />
          
          <div className="contact-info-grid grid-4">
            {contactInfo.map((info, index) => (
              <div className="contact-info-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-grid grid-2">
            <div className="contact-form-wrapper" data-aos="fade-right">
              <SectionHeader 
                title="Send Us a Message" 
                subtitle="Fill out the form below, and we'll get back to you as soon as possible" 
              />
              <ContactForm />
            </div>
            <div className="contact-map-wrapper" data-aos="fade-left">
              <div className="contact-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7382.352169103835!2d73.17356311466398!3d22.30917939225237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSilver%20Point%20Complex%2C%20Alkapuri!5e0!3m2!1sen!2sin!4v1747194224242!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ABE Engineering Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services" 
          />
          
          <div className="faq-grid grid-2" data-aos="fade-up">
            <div className="faq-item">
              <h3 className="faq-question">What industries do you serve?</h3>
              <p className="faq-answer">
                We primarily serve the oil and gas industry, including upstream, midstream, and downstream operations. Our solutions are designed specifically for the unique challenges and requirements of this industry.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you provide international services?</h3>
              <p className="faq-answer">
                Yes, we offer our services internationally and have experience working with clients around the world. Our team can provide remote support or on-site assistance depending on your specific needs.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What types of equipment do you supply?</h3>
              <p className="faq-answer">
                We supply a wide range of equipment for the oil and gas industry, including pumps, valves, compressors, separators, and specialized drilling equipment. Visit our Equipment page for more details.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can you provide custom engineering solutions?</h3>
              <p className="faq-answer">
                Yes, we offer custom engineering services tailored to the specific needs of our clients. Our team of experienced engineers can design and implement solutions for your unique challenges and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;