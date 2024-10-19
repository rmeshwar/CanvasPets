// TODO: Handle pet interactions and assignment progress display

document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup loaded.');

    // Example of interacting with the DOM (feeding the pet)
    const feedPetButton = document.getElementById('feed-pet');
    feedPetButton.addEventListener('click', () => {
        console.log('Pet has been fed.');
        // TODO: Update pet's status or animation
    });

    // TODO: Fetch assignment progress from background script
    chrome.runtime.sendMessage({ action: 'getAssignmentProgress' }, response => {
        console.log('Assignment progress:', response.progress);
        document.getElementById('progress').textContent = response.progress;
    });
});
