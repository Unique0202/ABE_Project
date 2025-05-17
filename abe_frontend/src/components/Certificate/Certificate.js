import React from 'react';
import { useState } from 'react';
import { FaDownload, FaExpand } from 'react-icons/fa';
import './Certificate.css';

const Certificate = ({ image, title, issuedBy, date, description }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="certificate-card" data-aos="fade-up">
        <div className="certificate-image" onClick={toggleModal}>
          <img src={image} alt={title} />
          <div className="certificate-overlay">
            <FaExpand />
          </div>
        </div>
        <div className="certificate-content">
          <h3 className="certificate-title">{title}</h3>
          <div className="certificate-info">
            <p className="certificate-issuer">Issued by: {issuedBy}</p>
            <p className="certificate-date">Date: {date}</p>
          </div>
          <p className="certificate-description">{description}</p>
          <a href={image} download className="certificate-download">
            <FaDownload /> Download
          </a>
        </div>
      </div>

      {showModal && (
        <div className="certificate-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={toggleModal}>&times;</span>
            <img src={image} alt={title} className="modal-image" />
            <div className="modal-details">
              <h3>{title}</h3>
              <p><strong>Issued by:</strong> {issuedBy}</p>
              <p><strong>Date:</strong> {date}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;