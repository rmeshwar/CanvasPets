# CanvasPets 🐾

**CanvasPets** is a fun and engaging Chrome extension that motivates students to complete their assignments by taking care of a virtual pet. The pet thrives as you complete your coursework, and it gets progressively happier as your to-do list on Canvas becomes empty. 

This project was developed as part of **HackOHI/O 12**, and serves as a proof-of-concept aimed at boosting productivity through gamification.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Future Development](#future-development)
- [Contributors](#contributors)

---

## Overview
CanvasPets syncs with the user's Canvas account to fetch assignments and tracks their progress via Canvas' To-Do list. Completing assignments rewards the user with points, which can be used to purchase items and treats for their pet. The pet becomes happier and healthier the more assignments are completed.

Our focus is to make coursework more rewarding and engaging through pet-care gamification. 

---

## Features
- **To-Do Sync**: CanvasPets fetches your assignments directly from the Canvas To-Do list using the Canvas API.
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
   git clone https://github.com/yourusername/CanvasPets.git
   ```
2. Navigate to the project folder.
   ```bash
   cd CanvasPets
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

## Future Development
1. User Authentication for API Access
   Currently, CanvasPets uses a hardcoded access token for interacting with the Canvas API. In future iterations, we plan to implement a user-friendly authentication system that allows users to input and save their Canvas API tokens securely. This will enable broader usability across different institutions beyond OSU.

2. Shop and Customization Features
   A key feature under development is the integration of a shop system where users can spend the points they earn by completing assignments. In the shop, users will be able to purchase various cosmetic items like new backgrounds, pet accessories, and treats for their CanvasPets. This will enhance user engagement and give them more control over customizing their experience.

3. Pet Interaction and Satisfaction System
   Future versions of CanvasPets will introduce interactions such as feeding and petting your pet. The system will include a "Pet Satisfaction" meter, which decreases over time if the pet is neglected (i.e., if the user does not complete assignments). Keeping the pet happy will motivate users to complete assignments on time, improving productivity.

4. Cross-Domain API Compatibility
   Currently, the extension is configured for OSU's Canvas domain (osu.instructure.com). We plan to make the extension compatible with other institutions' Canvas instances by deteacting a user's institution's Canvas domain, making the extension universally accessible to all Canvas users.

## Contributors
   Rida Adhami
   Lizzy Vologzhanin
   Kshij Soni

## License
[MIT](https://choosealicense.com/licenses/mit/)

