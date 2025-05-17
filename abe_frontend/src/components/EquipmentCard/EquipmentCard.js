import React from 'react';
import './EquipmentCard.css';

const EquipmentCard = ({ image, name, description, specifications }) => {
  return (
    <div className="equipment-card" data-aos="fade-up">
      {/* <div className="equipment-image">
        <img src={image} alt={name} />
      </div> */}
      <div className="equipment-content">
        <h3 className="equipment-name">{name}</h3>
        {/* <button className="btn btn-outline equipment-btn">View Details</button> */}
      </div>
    </div>
  );
};

export default EquipmentCard;