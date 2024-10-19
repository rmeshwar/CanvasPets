// TODO: Set up background tasks such as API calls and notifications

chrome.runtime.onInstalled.addListener(() => {
    console.log('Canvas Pet extension installed.');
    // TODO: Set default settings or trigger initial setup
});

// TODO: Function to fetch Canvas assignments
function fetchAssignments() {
    console.log('Fetching Canvas assignments...');
    // Placeholder for making API requests to the Canvas API
    // fetch('https://canvas-api-url')...
}

// TODO: Set up interval to check assignments periodically
chrome.alarms.create('checkAssignments', { periodInMinutes: 15 });

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === 'checkAssignments') {
        fetchAssignments();
    }
});
