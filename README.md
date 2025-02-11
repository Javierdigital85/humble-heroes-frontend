# Superhero App

This is a simple web application where users can create and view superheroes. It features forms to input superhero data, a list of superheroes displayed on the homepage, and notifications on form submissions using `react-toastify`.

## Features

- Add a new superhero by filling out a form with their name, superpower, and humility score.
- View a list of superheroes on the homepage.
- The app communicates with a backend API to store and fetch superhero data.
- Responsive design using Bootswatch for styling.

## Technologies Used

- **Frontend**: React, Vite, Axios, React Router, React Toastify

## Installation

To run this app locally:

1. Clone this repository:

```bash
   git clone https://github.com/Javierdigital85/humble-heroes-frontend
   cd humble-heroes-frontend
```

2. Install the dependencies:
   npm install

3. Run the development server:
   npm run dev

4. The app will be available at http://localhost:5173.

## Technical Skills: Code Quality, Simplicity, and Functionality

The code has been written with simplicity in mind, following best practices for React applications. Each component is modular and reusable. State management is handled using React's `useState` hook, and API interactions are done with axios.
- HeroeForm handles form submissions and communicates with the backend API to create new heroes.
- HeroeItem is responsible for displaying individual hero details.
- HeroesList fetches and displays a list of heroes.
- HeroeService encapsulates API calls to keep components clean.

## Team Player Attitude

If I were working with a teammate on this project, I would:
1. Code Reviews: Set up a system for regular code reviews to ensure consistency and identify potential issues early.
2. Feature Expansion: Collaborate on adding features such as editing or deleting heroes, or even integrating user authentication for managing heroes.
3. UI/UX Design: Work together to refine the user interface and ensure the app is easy to use and visually appealing.
4. API Improvements: Coordinate on improving the backend to support more complex queries or adding extra functionalities like searching or filtering superheroes.

## Eagerness to Learn: If I Had More Time

With more time, I would:
1. Backend Improvements: Implement more endpoints to add additional functionalities.
2. Styling: Enhance the UI/UX further with more advanced styling and animations to improve the user experience.
3. Authentication: Add user authentication so users can only view and manage their own superheroes.
4. State Management: Integrate a global state management solution like Redux or Context API for better scalability as the app grows.

## Humility and Communication

I believe communication is key to any successful collaboration. When working in a team, I would always:
1. Keep an open line of communication and be receptive to feedback.
2. Provide clear and concise explanations in comments and documentation.
3. Acknowledge areas where I can improve and seek guidance when necessary.
4. Be proactive in learning from teammates and expanding my skills.
