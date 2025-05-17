import React from 'react';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Bhavesh Kakdiya',
      position: 'Director',
      image: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg',
      contact: '+91 97277 24402'
    },
    {
      name: 'Nitin Mehta',
      position: 'Director',
      image: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg',
      contact: '+91 98243 40597'
    },
    {
      name: 'Devendrasinh Jadeja',
      position: 'Director',
      image: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg',
      contact: '+91 90993 80009'
    },
    {
      name: 'Yuvrajsinh Gohil',
      position: 'Director',
      image: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg',
      contact: '+91 70160 56362'
    }
  ];

  return (
    <>
      <Hero
        title="About ABE Engineering"
        subtitle="Learn about our history, mission, values, and the team behind our success"
        backgroundImage="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section company-profile-section">
        <div className="container">
          <SectionHeader 
            title="Company Profile" 
            subtitle="Excellence in oil and gas engineering since 1999" 
          />
          
          <div className="company-profile-content grid-2">
            <div className="company-profile-text" data-aos="fade-right">
              <p>
                We would like to introduce ourselves as ABE Engineers Pvt Ltd (Formerly known as A B Engineers) is ISO 9001:2015 & ISO 45001:2018 certified company for All types of Mechanical Fabrication & Erection jobs (Piping, Structural and heavy equipment Erection) as well Process control instrument Erection, Installation & Calibration, Testing, Loop Checking, Commissioning of Complete Process Control instruments.
              </p>
              <p>
                We are in to the Instrumentation field since 1999. Now we have expanded our business to Mechanical work since 2016 and have completed projects in this field successfully. We are having fully equipped Testing laboratory with all the test equipment having NPL / NIST traceability and having the accuracy better than 0.025 % FS also we have latest equipment workshop for Mechanical as well fabrication workshop with 12000 Square Feet Workshop Shed with 10 MT EOT crane.
              </p>
              <p>
                ABE Engineers Pvt Ltd undertakes the Turnkey job of Erection and commissioning of Mechanical, Electrical as well Process control instruments with all allied jobs. We have successfully completed many jobs of Erection and I commissioning of Oil and Gas, Power, Sugar, Glass industries etc.
              </p>
              <p>
                We also supply Skilled & Unskilled manpower on man-day basis to our valued customer for Instrumentation, Mechanical & Electrical as well offshore commissioning jobs.
              </p>
            </div>
            <div className="company-profile-image" data-aos="fade-left">
              <img src="https://www.constructionworld.in/assets/uploads/a9bb9598bc0bad1f0fcdf17e3801c275.webp" alt="ABE Engineering Office" />
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid grid-2">
            <div className="vision-mission-item" data-aos="fade-up">
              <h3>Our Vision</h3>
              <p>Focus on building long term business relation with customer ensuring better understanding of customer needs and customer satisfaction with providing best services.</p>
            </div>
            <div className="vision-mission-item" data-aos="fade-up" data-aos-delay="100">
              <h3>Our Mission</h3>
              <p>The company promoters enjoy high credibility and trust of its clients and believe in quality, timely delivery, and high efficiency in work and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide our business" 
          />
          
          <div className="values-grid grid-3">
            <div className="value-item" data-aos="fade-up">
              <div className="value-icon">
                <i className="value-number">01</i>
              </div>
              <h4>Quality</h4>
              <p>We are committed to delivering the highest quality in everything we do, from our products and services to our customer interactions.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon">
                <i className="value-number">02</i>
              </div>
              <h4>Integrity</h4>
              <p>We conduct our business with honesty, transparency, and ethical standards, building trust with our clients, partners, and employees.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <i className="value-number">03</i>
              </div>
              <h4>Innovation</h4>
              <p>We continuously seek new and better ways to solve problems and meet the evolving needs of our clients in the oil and gas industry.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon">
                <i className="value-number">04</i>
              </div>
              <h4>Safety</h4>
              <p>We prioritize the health and safety of our employees, clients, and the communities in which we operate.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="400">
              <div className="value-icon">
                <i className="value-number">05</i>
              </div>
              <h4>Collaboration</h4>
              <p>We work closely with our clients and partners, fostering open communication and teamwork to achieve common goals.</p>
            </div>
            <div className="value-item" data-aos="fade-up" data-aos-delay="500">
              <div className="value-icon">
                <i className="value-number">06</i>
              </div>
              <h4>Excellence</h4>
              <p>We strive for excellence in all aspects of our business, setting high standards and continuously working to exceed them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <SectionHeader 
            title="Our Leadership Team" 
            subtitle="Meet the experts behind ABE Engineering" 
          />
          
          <div className="team-grid grid-4">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-content">
                  <h4 className="team-member-name">{member.name}</h4>
                  <p className="team-member-position">{member.position}</p>
                  <p className="team-member-contact">{member.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;