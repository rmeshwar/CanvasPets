import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  useEffect(() => {
    console.log('Popup component mounted');
    document.getElementById('root').innerHTML = "<h1>Canvas Pet Test</h1>";
  }, []);

  return null;
};

// Ensure ReactDOM renders the `Popup` component into the correct root element
ReactDOM.render(<Popup />, document.getElementById('root'));

export default Popup;
