import React from 'react';
import './ClientLogo.css';

const ClientLogo = ({ logo, name }) => {
  return (
    <div className="client-logo" data-aos="fade-up">
      <img src={logo} alt={name} />
    </div>
  );
};

export default ClientLogo;