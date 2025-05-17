import React from 'react';
import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields.',
        type: 'error'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      message: 'Processing...',
      type: 'info'
    });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        message: 'Thank you for your message. We will contact you soon!',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          message: '',
          type: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-form-container" data-aos="fade-up">
      <form className="contact-form" onSubmit={handleSubmit}>
        {formStatus.message && (
          <div className={`form-message ${formStatus.type}`}>
            {formStatus.message}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;