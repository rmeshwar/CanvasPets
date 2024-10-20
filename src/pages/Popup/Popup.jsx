import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import petTab from '../../assets/pet-tab.png';
import settingsTab from '../../assets/settings-tab.png';
import shopTab from '../../assets/shop-tab.png';
import infoTab from '../../assets/info-tab.png';
import Pet from '../Pet/Pet';
import Info from '../Info/Info';
import '../Pet/pet.css';
import './index.css'
import Settings from './settings'; // Import Settings tab content

const Popup = () => {
  const [activeTab, setActiveTab] = useState('Pet'); // Default to Pet tab
  const [points, setPoints] = useState(0); // Points tracking
  const [assignments, setAssignments] = useState([]); // To-Do list

  // Tab content function
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Pet':
        return <Pet />;
      case 'Settings':
        return (
          <Settings
            points={points}
            assignments={assignments}
            setAssignments={setAssignments}
            setPoints={setPoints}
          />
        );
      case 'Shop':
        return <div><h2>Shop Tab</h2><p>Shop content goes here!</p></div>;
      case 'Info':
        return <Info />;
      default:
        return <div><h2>Pet Tab</h2><p>Your pet goes here!</p></div>;
    }
  };

  // Attach event listeners for the navbar buttons using vanilla JS
  useEffect(() => {
    const navbarButtons = document.querySelectorAll('.navbar img');
    
    // Event listener for tab switching
    navbarButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const tab = event.target.alt; // Get the alt text (tab name) from the image
        setActiveTab(tab); // Set the active tab based on the clicked button
      });
    });

    // Clean up event listeners
    return () => {
      navbarButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div>
      <div className="content">
        {renderTabContent()} {/* Renders the content for the active tab */}
      </div>
      
      {/* Bottom Navbar */}
      <div className="navbar">
        <img src={petTab} alt="Pet" />
        <img src={settingsTab} alt="Settings" />
        <img src={shopTab} alt="Shop" />
        <img src={infoTab} alt="Info" />
      </div>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));

export default Popup;
