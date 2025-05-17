import React from 'react';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './ClientsPage.css';

const ClientsPage = () => {
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
    },
    {
      id: 13,
      name: 'samsung',
      logo: 'https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png'
    },
    {
      id: 14,
      name: 'Sabarmati Gas',
      logo: 'https://www.sabarmatigas.in/images/logo.png'
    },
    {
      id: 15,
      name: 'Siemens',
      logo: 'https://d1.awsstatic.com/case-studies/US/Siemens%20resize.03cf04e9d7a200fa96c6446bd72d63f55a5ca59b.jpg'
    },
    {
      id: 16,
      name: 'Technip',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSti-M1CuQlkMERyKCKRtiCSkGow7cAO1HeWA&s'
    },
    {
      id: 17,
      name: 'Shree Renuka Sugars',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLZ9VNem2i4t0vUkbMd-eHqPjdWtMh386BA&s'
    },
    {
      id: 18,
      name: 'Larsen & Toubro: L&T India',
      logo: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-18236,resizemode-75,msid-119848724/industry/indl-goods/svs/engineering/larsen-toubro-wins-large-orders-in-india-overseas.jpg'
    },
    {
      id: 19,
      name: 'General Electric',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1200px-General_Electric_logo.svg.png'
    },
    {
      id: 20,
      name: 'Suagm Marketing Industries',
      logo: 'https://lh3.googleusercontent.com/0vwhPv5kZkd7gQA0n75gEM7bph98c5so5u7ciO42PlUsd88BR7sD7_8oDNTh5Zz0yLs=h310'
    },
    {
      id: 21,
      name: 'Baroda Dairy',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XLa2hoWxKIpJvkB_NnRF8ptYO-h3CtYyng&s'
    },
    {
      id: 22,
      name: 'Sumul Dairy',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-Y-yru88Xx8Z_hh-VPjT1opCut0eQwjL5Q&s'
    },
    {
      id: 23,
      name: 'Bharat Oman Refinery Limited',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08PYhgvfgy3Yk7pxQNkCmBtsvzHYwJvDNrQ&s'
    },
    {
      id: 24,
      name: 'Gujrat Gas',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaBo5UuhxlDtDy5STnDBJFi58FiYkmwCp8A&s'
    },
    {
      id: 25,
      name: 'Godrej Industries',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/1200px-Godrej_Logo.svg.png'
    },
    {
      id: 26,
      name: 'Vijay Tanks & Vessels (P) Ltd.',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQG8dyWn5jVeJA/company-logo_200_200/company-logo_200_200/0/1630612125303/vijay_tanks_and_vessels_private_limited_logo?e=2147483647&v=beta&t=k3ApXws97Zxcd6WLP_dW-Ce3PNYDgJt36yLZ613bhbg'
    },
    {
      id: 27,
      name: 'Sumul Dairy Marketing',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PoGBpKlpIqftfRupwhZJ9trwLo1keo-peg&s'
    },
    {
      id: 28,
      name: 'Raychem RPG Pvt Ltd.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNezM8yqRrUzhXfD7bKiz1nFWfRpRbbmsu9g&s'
    },
    {
      id: 29,
      name: 'Yokogawa India Limited',
      logo: 'https://mms.businesswire.com/media/20240213110562/en/639986/5/YB1.jpg?download=1'
    }
  ];

  return (
    <>
      <Hero
        title="Our Clients"
        subtitle="Trusted by leading companies in the oil and gas industry"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section clients-logo-section">
        <div className="container">
          <SectionHeader
            title="Our Valued Clients"
            subtitle="We are proud to work with leading companies in the oil and gas industry"
          />

          <div className="clients-logo-grid">
            {clients.map(client => (
              <div key={client.id} className="clients-logo" title={client.name}>
                <img src={client.logo} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section clients-cta-section">
        <div className="container">
          <div className="clients-cta-content" data-aos="zoom-in">
            <h2>Become Our Next Success Story</h2>
            <p>Contact us today to discuss how we can help you achieve your goals in the oil and gas industry.</p>
            <a href="/contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPage;