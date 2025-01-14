import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      {/* What is React Section */}
      <Section title="What is React?">
        <p>
          React is a popular JavaScript library for building user interfaces, particularly for single-page applications. 
          It allows developers to create reusable UI components and manage the state of complex web applications efficiently. 
          Created by Facebook, React has become a key tool in modern web development.
        </p>
      </Section>

      {/* Benefits of React Section */}
      <Section title="Benefits of React">
        <ul>
          <li>Efficient updates and rendering using the Virtual DOM.</li>
          <li>Component-based structure promotes reusability and maintainability.</li>
          <li>Rich ecosystem with tools like React Router and Redux.</li>
          <li>Strong community support and active development.</li>
          <li>Cross-platform capabilities with React Native.</li>
        </ul>
      </Section>

      {/* About Me Section */}
      <Section title="About Me">
        <AboutMe /> {/* Add the AboutMe component */}
      </Section>

      {/* Helpful Resources Section */}
      <Section title="Helpful resources">
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="React Official Documentation"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          label="React Tutorial for Beginners by Net Ninja"
        />
        <HelpfulResource
          link="https://beta.reactjs.org/learn"
          label="React Beta Docs: Learning Path"
        />
      </Section>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}

export default App;

// 1. Imports the React Library, to define & use React components.
// 2. Imports Header component
// 3. function App() {...} - Defines a functional component called App.
//    a. A functional component is a simpler way to write components in React (oppsosed to class components).
//    b. This component contains JSX code & can return a UI structure.

// 4. Inside the app component, JSX syntax is used to define the structure.
//    a. The div element has a class name app, and within it, the Header component is rendered.

// 5. export defailt App; This exports the App component so it can be used in other files.