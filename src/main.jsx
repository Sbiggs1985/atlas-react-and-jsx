import React from 'react';
import ReactDOM from 'react-dom/client'; //Responsible for rendering a React application in the browser.
import App from './App'; // import the App component
import "./index.css";

const rootElement = document.getElementById('root');

// Render the App component to the root element
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

