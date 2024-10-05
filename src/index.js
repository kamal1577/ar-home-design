import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional
import 'bootstrap/dist/css/bootstrap.min.css';

// Creating the root
const root = createRoot(document.getElementById('root'));

// Rendering the App component
root.render(
  <React.StrictMode>
    <App />  {/* All routing is already inside App.js */}
  </React.StrictMode>
);

// Optionally include reportWebVitals if needed
reportWebVitals();
