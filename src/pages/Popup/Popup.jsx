import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [authStatus, setAuthStatus] = useState('Not Authenticated');
  const [assignments, setAssignments] = useState([]);
  const [tokenInput, setTokenInput] = useState('');

  useEffect(() => {
    // Ensure the popup is resized to the correct dimensions
    window.resizeTo(300, 260);  // Resizing the popup to 300x260px
  }, []);

  const handleTokenSave = () => {
    if (tokenInput) {
      chrome.storage.local.set({ accessToken: tokenInput }, () => {
        alert('Token saved successfully!');
        setAuthStatus('Authenticated');
        fetchAssignments(tokenInput);  // Fetch assignments right after saving the token
      });
    } else {
      alert('Please enter a valid token.');
    }
  };

  const handleFetchAssignments = () => {
    chrome.storage.local.get(['accessToken'], (result) => {
      if (result.accessToken) {
        fetchAssignments(result.accessToken);
      } else {
        alert('No token found. Please input a token.');
      }
    });
  };

  const fetchAssignments = (token) => {
    fetch('https://canvas.instructure.com/api/v1/courses/1/assignments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAssignments(data))
      .catch((error) => console.error('Error fetching assignments:', error));
  };

  return (
    <div>
      <h1>Canvas Pet</h1>
      <p>Status: {authStatus}</p>

      <label htmlFor="accessToken">Access Token:</label>
      <input
        type="text"
        id="accessToken"
        value={tokenInput}
        onChange={(e) => setTokenInput(e.target.value)}
        placeholder="Enter your access token"
      />
      <button onClick={handleTokenSave}>Save Token</button>

      <button onClick={handleFetchAssignments}>Fetch Assignments</button>

      <ul>
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li key={assignment.id}>{assignment.name}</li>
          ))
        ) : (
          <li>No assignments available</li>
        )}
      </ul>
    </div>
  );
};

export default Popup;
