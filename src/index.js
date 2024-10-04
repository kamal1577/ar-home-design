import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for Routes in React Router v6
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap
import Home from './components/Home';
import ARPage from './components/ARPage';
import './index.css';

import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals';

// Removing duplicate import
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    < App />
    <Routes> {/* Routes replaces Switch in v6 */}
      <Route path="/" element={<Home />} />  {/* element prop instead of component */}
      <Route path="/ar" element={<ARPage />} />  {/* element prop */}
    </Routes>
  </Router>
);

// Optionally include reportWebVitals if needed
reportWebVitals();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
