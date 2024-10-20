import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Popup = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [points, setPoints] = useState(0); // Points tracking
  const [prevTodoCount, setPrevTodoCount] = useState(0); // Previous To-Do count for tracking
  const [authStatus, setAuthStatus] = useState('Not Authenticated');

  const hardcodedAccessToken = '8597~aChk3ynkKfWfPcTtkL2rE2RVYKRRCzvXhhNy8r6m3VP6tJCVnaLt4PH6D4uR4Q9V';

  // Simulate removing an item from the To-Do list for testing
  const simulateRemoveItem = () => {
    setAssignments((prevAssignments) => {
      if (prevAssignments.length > 0) {
        setPrevTodoCount(prevAssignments.length); // Update previous To-Do count
        return prevAssignments.slice(0, prevAssignments.length - 1); // Remove one item from the assignments list
      }
      return prevAssignments;
    });
};

  // Attach event listeners for the buttons using vanilla JS
  useEffect(() => {
    // Fetch Assignments Button (First Button)
    const fetchButton = document.querySelector('button');
    if (fetchButton) {
      fetchButton.addEventListener('click', () => {
        console.log('Fetch Assignments button clicked');
        fetchAssignmentsAndCourses(); // Trigger fetch assignments
      });
    }

    // Simulate Remove Assignment Button (Second Button)
    const simulateButton = document.querySelectorAll('button')[1];
    if (simulateButton) {
      simulateButton.addEventListener('click', () => {
        console.log('Simulate Remove Assignment button clicked');
        simulateRemoveItem(); // Trigger simulate remove
      });
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (fetchButton) fetchButton.removeEventListener('click', fetchAssignmentsAndCourses);
      if (simulateButton) simulateButton.removeEventListener('click', simulateRemoveItem);
    };
  }, []);

  // Fetch the assignments when the user clicks the "Fetch Assignments" button
  const fetchAssignmentsAndCourses = () => {
    console.log('Fetch button clicked');

    chrome.runtime.sendMessage(
      {
        action: 'fetchData',
        accessToken: hardcodedAccessToken, // Use hardcoded token
        hostname: location.hostname,
      },
      (response) => {
        if (response && response.success) {
          console.log('Courses fetched:', response.courses);
          setCourses(response.courses); // Set courses properly here
          console.log('To-Do items fetched:', response.todoItems);
          setPrevTodoCount(assignments.length); // Store the previous To-Do count
          setAssignments(response.todoItems); // Set To-Do items
        } else {
          console.error('Error fetching data:', response.error);
        }
      }
    );
  };


  // Logic to calculate points based on To-Do items
  useEffect(() => {
    if (assignments.length < prevTodoCount && prevTodoCount > 0) {
      // User completed an assignment, add 25 points
      setPoints((prevPoints) => prevPoints + 25);

      if (assignments.length === 0) {
        // User completed the last assignment, add 100 points as a bonus
        setPoints((prevPoints) => prevPoints + 100);
      }
    }
  }, [assignments]);

  return (
    <div>
      <h1>Canvas Pet</h1>
      <p>Status: {authStatus}</p>
      <p>Points: {points}</p> {/* Show points */}
      <p>To-Do List Items: {assignments.length}</p> {/* Show number of To-Do items */}

      {/* Button to fetch assignments */}
      <button style={{ padding: '10px', width: '100%' }}>
        Fetch Assignments
      </button>

      {/* Button to simulate completing an assignment */}
      <button style={{ padding: '10px', width: '100%', marginTop: '10px' }}>
        Simulate Remove Assignment
      </button>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));

export default Popup;
