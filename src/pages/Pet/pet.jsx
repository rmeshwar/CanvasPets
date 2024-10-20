import React from 'react';
import './pet.css'; // Import the CSS file
import carImage from '../../assets/car.png'; // Import the pet image
import background from '../../assets/bckg_1.png'; // Import the background image

const Pet = () => {
  return (
    <div className="pet-container" style={{ backgroundImage: `url(${background})` }}>
      {/* Pet image */}
      <img src={carImage} alt="Pet" className="pet-image" />
    </div>
  );
};

export default Pet;
