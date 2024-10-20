import React, { useEffect, useState } from 'react';

const Settings = ({ points, setPoints, assignments, setAssignments }) => {
  const hardcodedAccessToken = '8597~aChk3ynkKfWfPcTtkL2rE2RVYKRRCzvXhhNy8r6m3VP6tJCVnaLt4PH6D4uR4Q9V';
  const [prevTodoCount, setPrevTodoCount] = useState(assignments.length); // Track previous To-Do count
  const [isLoaded, setIsLoaded] = useState(false); // Track if the assignments have been loaded from storage

  // Simulate removing an item from the To-Do list for testing
  const simulateRemoveItem = () => {
    console.log('Simulate Remove Item clicked');
    if (assignments.length > 0) {
      const newAssignments = assignments.slice(0, assignments.length - 1); // Remove one item
      setPrevTodoCount(assignments.length); // Set previous count before modifying assignments
      setAssignments(newAssignments); // Update the assignment list
      // Persist updated assignments to chrome.storage
      chrome.storage.local.set({ assignments: newAssignments }, () => {
        console.log('Assignments after removing an item are saved.');
      });
    }
  };

  // Fetch the assignments and courses from Canvas API
  const fetchAssignmentsAndCourses = () => {
    console.log('Fetch Assignments clicked');
    chrome.runtime.sendMessage(
      {
        action: 'fetchData',
        accessToken: hardcodedAccessToken, // Use hardcoded token
      },
      (response) => {
        if (response && response.success) {
          console.log('Courses fetched:', response.courses);
          console.log('To-Do items fetched:', response.todoItems);
          const newAssignments = response.todoItems;
          setPrevTodoCount(assignments.length); // Store the previous To-Do count
          setAssignments(newAssignments); // Set To-Do items
          // Persist the fetched assignments
          chrome.storage.local.set({ assignments: newAssignments }, () => {
            console.log('Fetched assignments are saved.');
          });
        } else {
          console.error('Error fetching data:', response.error);
        }
      }
    );
  };

  // Load points and assignments from chrome storage when the component mounts
  useEffect(() => {
    chrome.storage.local.get(['points', 'assignments'], (result) => {
      if (result.points !== undefined) {
        setPoints(result.points);
      }
      if (result.assignments !== undefined && result.assignments.length > 0) {
        setAssignments(result.assignments);
        setPrevTodoCount(result.assignments.length); // Set initial prevTodoCount
        setIsLoaded(true); // Mark as loaded after the state is correctly set
      } else {
        setIsLoaded(true); // If no assignments in storage, still mark as loaded
      }
    });
  }, [setPoints, setAssignments]);

  // Logic to calculate points based on To-Do items and persist the data
  useEffect(() => {
    if (isLoaded && assignments.length < prevTodoCount && prevTodoCount > 0) {
      // User completed an assignment, add 25 points
      setPoints((prevPoints) => {
        const newPoints = prevPoints + 25;
        chrome.storage.local.set({ points: newPoints });
        return newPoints;
      });

      if (assignments.length === 0) {
        // User completed the last assignment, add 100 points as a bonus
        setPoints((prevPoints) => {
          const newPoints = prevPoints + 100;
          chrome.storage.local.set({ points: newPoints });
          return newPoints;
        });
      }
    }

    if (isLoaded) {
      // Persist assignments in chrome storage after they are modified
      chrome.storage.local.set({ assignments });
    }
  }, [assignments, prevTodoCount, setPoints, isLoaded]);

  // Attach event listeners using vanilla JS
  useEffect(() => {
    // Fetch Assignments Button (First Button)
    const fetchButton = document.getElementById('fetch-assignments');
    const simulateButton = document.getElementById('simulate-remove');

    // Attach event listeners only once
    const handleFetchClick = () => {
      console.log('Fetch Assignments button clicked');
      fetchAssignmentsAndCourses(); // Trigger fetch assignments
    };
    
    const handleSimulateClick = () => {
      console.log('Simulate Remove Assignment button clicked');
      simulateRemoveItem(); // Trigger simulate remove
    };

    fetchButton?.addEventListener('click', handleFetchClick);
    simulateButton?.addEventListener('click', handleSimulateClick);

    // Clean up event listeners when component unmounts
    return () => {
      fetchButton?.removeEventListener('click', handleFetchClick);
      simulateButton?.removeEventListener('click', handleSimulateClick);
    };
  }, [assignments]); // Ensure event listeners are attached once

  return (
    <div>
      <h2>Settings Tab</h2>
      <p>Points: {points}</p>
      <p>To-Do List Items: {assignments.length}</p> {/* Show number of To-Do items */}

      {/* Button to fetch assignments */}
      <button id="fetch-assignments" style={{ padding: '10px', width: '100%' }}>
        Fetch Assignments
      </button>

      {/* Button to simulate completing an assignment */}
      <button id="simulate-remove" style={{ padding: '10px', width: '100%', marginTop: '10px' }}>
        Simulate Remove Assignment
      </button>
    </div>
  );
};

export default Settings;
