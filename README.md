# CanvasPet 🐾

**CanvasPet** is a fun and engaging Chrome extension that motivates students to complete their assignments by taking care of a virtual pet. The pet thrives as you complete your coursework, and it gets progressively happier as your to-do list on Canvas becomes empty. 

This project was developed as part of **HackOHI/O 12**, and serves as a proof-of-concept aimed at boosting productivity through gamification.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Future Development](#future-development)
- [Contributors](#contributors)

---

## Overview
CanvasPet syncs with the user's Canvas account to fetch assignments and tracks their progress via Canvas' To-Do list. Completing assignments rewards the user with points, which can be used to purchase items and treats for their pet. The pet becomes happier and healthier the more assignments are completed.

Our focus is to make coursework more rewarding and engaging through pet-care gamification. 

---

## Features
- **To-Do Sync**: CanvasPet fetches your assignments directly from the Canvas To-Do list using the Canvas API.
- **Points System**: Gain points for each assignment you complete. Get extra points for clearing your entire To-Do list.
- **Pet Interaction**: Feed and care for your pet using points earned through completed coursework.
- **Dynamic Pet Mood**: Pet's mood changes based on how often it's fed (and how much coursework is being completed).
- **Multiple Tabs**: Manage your pet, view your points, shop for items, and adjust settings across multiple tabs.
- **Local Data Storage**: Progress is saved using Chrome's local storage, ensuring your points and assignments persist between sessions.

---

## Installation

### Prerequisites:
- Google Chrome or any Chromium-based browser (e.g., Brave, Microsoft Edge)
- **Canvas Account** for fetching assignments via Canvas API

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CanvasPet.git
   ```
2. Navigate to the project folder.
   ```bash
   cd CanvasPet
   ```
3. Install the required dependencies.
   ```bash
   npm install
   ```
4. Run the project.
   ```bash
   npm start
   ```
5. In Chrome, open the Extensions settings and enable Developer Mode.
6. Load the unpacked extension by selecting the `build` folder inside the project.

## Usage
1. Open the extension and go to the Settings tab.
2. Fetch assignments using the Fetch Assignments button.
3. Complete assignments to earn points and track your progress.
4. Use points to interact with your virtual pet and make purchases in the future shop.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

