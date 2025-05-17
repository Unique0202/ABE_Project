import React from 'react';
import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import EquipmentCard from '../../components/EquipmentCard/EquipmentCard';
import './EquipmentPage.css';

const EquipmentPage = () => {
  const allEquipment = [
    {
      id: 1,
      category: 'mechanical equipment',
      name: 'Over Head Crane (EOT) - 10 MT',
      // image: 'https://images.pexels.com/photos/4491005/pexels-photo-4491005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      category: 'mechanical equipment',
      name: 'CNC Profile Cutting Machine - Up to 25 MM Plasma & 150 MM in Oxy-Fuel'
    },
    {
      id: 3,
      category: 'mechanical equipment',
      name: 'CNC Plate Rolling Machine - Up to 25 MM'
    },
    {
      id: 4,
      category: 'mechanical equipment',
      name: 'Air Compressor - 07 Kg/Cm2'
    },
    {
      id: 5,
      category: 'mechanical equipment',
      name: 'Radial Drilling Machine Up to 50 MM'
    },
    {
      id: 6,
      category: 'mechanical equipment',
      name: 'Magnetic Drill Machine Up to 13 MM'
    },
    {
      id: 7,
      category: 'mechanical equipment',
      name: 'PUG Cutting Machine - 70 MM'
    },
    {
      id: 8,
      category: 'mechanical equipment',
      name: 'Air less Spray Machine - 300 Micron'
    },
    {
      id: 9,
      category: 'mechanical equipment',
      name: 'S A 1/2 Blasting Machine with Hopper 50-70 Micron'
    },
    {
      id: 10,
      category: 'mechanical equipment',
      name: 'Hydra - 15 MT'
    },
    {
      id: 11,
      category: 'mechanical equipment',
      name: 'Welding Rectifier - 400 & 600 Amps'
    },
    {
      id: 12,
      category: 'mechanical equipment',
      name: 'Welding Transformer - 400 Amps'
    },
    {
      id: 13,
      category: 'mechanical equipment',
      name: 'MIG welding Machine - 400 Amps'
    },
    {
      id: 14,
      category: 'mechanical equipment',
      name: 'Drilling Machine'
    },
    {
      id: 15,
      category: 'mechanical equipment',
      name: 'Drilling Machine - Pillar Type'
    },
    {
      id: 16,
      category: 'mechanical equipment',
      name: 'Hand Drill Machine'
    },
    {
      id: 17,
      category: 'mechanical equipment',
      name: 'Bench Drill Machine'
    },
    {
      id: 18,
      category: 'mechanical equipment',
      name: 'Flexible Grinding Machine '
    },
    {
      id: 19,
      category: 'mechanical equipment',
      name: 'Angle Grinder - 4", 5" & 7"'
    },
    {
      id: 20,
      category: 'mechanical equipment',
      name: 'Buffing Machine'
    },
    {
      id: 21,
      category: 'mechanical equipment',
      name: 'Mis. Tools, Spares, Pipe Range etc.'
    },
    {
      id: 22,
      category: 'mechanical equipment',
      name: 'Test Bench'
    },
    {
      id: 23,
      category: 'mechanical equipment',
      name: 'Pipe Hydraulic Bending Machine'
    },
    {
      id: 24,
      category: 'mechanical equipment',
      name: 'Pipe Cutter'
    },
    {
      id: 25,
      category: 'mechanical equipment',
      name: 'Hydro Testing Pump - Up to 700 Bar'
    },
    {
      id: 26,
      category: 'mechanical equipment',
      name: 'Pipe Threading Machine'
    },
    {
      id: 27,
      category: 'mechanical equipment',
      name: 'Pipe Bending Machine'
    },
    {
      id: 28,
      category: 'flow instruments',
      name: 'Flow Control Valve - 0 to 100 LPM'
    },
    {
      id: 29,
      category: 'flow instruments',
      name: 'Flow Regulator - 0 to 100 LPM'
    },
    {
      id: 30,
      category: 'flow instruments',
      name: 'Flow Control Valve - 0 to 100 LPM'
    },

  ];

  const [filteredEquipment, setFilteredEquipment] = useState(allEquipment);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'mechanical equipment', name: 'Mechanical Equipment' },
    { id: 'pressure instruments', name: 'Pressure Instruments' },
    { id: 'electrical instruments', name: 'Electrical Instruments' },
    { id: 'level instruments', name: 'Level Instruments' },
    { id: 'temperature instruments', name: 'Temperature Instruments' },
    { id: 'flow instruments', name: 'Flow Instruments' },
  ];

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredEquipment(allEquipment.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredEquipment(allEquipment.filter(item => 
        item.category === category && (
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ));
    }
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (activeCategory === 'all') {
      setFilteredEquipment(allEquipment.filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredEquipment(allEquipment.filter(item => 
        item.category === activeCategory && (
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      ));
    }
  };

  return (
    <>
      <Hero
        title="Our Equipment"
        subtitle="High-quality equipment for the oil and gas industry"
        backgroundImage="https://www.enggpro.com/blogs/wp-content/uploads/2023/10/offshore-oil-gas-production-exploration-business-production-oil-gas-plant-main-construction-platform-sea-energy-business_478515-287-720x480.png"
      />

      <section className="section equipment-section">
        <div className="container">
          <SectionHeader 
            title="Available Equipment" 
            subtitle="Explore our range of high-quality equipment for the oil and gas industry" 
          />
          
          <div className="equipment-filter" data-aos="fade-up">
            <div className="equipment-search">
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            <div className="equipment-categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => filterByCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {filteredEquipment.length > 0 ? (
            <div className="equipment-grid ">
              {filteredEquipment.map(equipment => (
                <EquipmentCard
                  key={equipment.id}
                  // image={equipment.image}
                  name={equipment.name}
                />
              ))}
            </div>
          ) : (
            <div className="no-equipment-found" data-aos="fade-up">
              <h3>No equipment found</h3>
              <p>Please try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section equipment-cta-section">
        <div className="container">
          <div className="equipment-cta-content" data-aos="zoom-in">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our team can help you find the right equipment for your specific needs. Contact us today for personalized assistance.</p>
            <a href="/contact" className="btn btn-secondary">Contact Our Team</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquipmentPage;