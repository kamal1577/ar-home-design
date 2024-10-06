import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import ARPage from "./components/ARPage";
import NavigationBar from "./components/NavigationBar";
import DetailPage from "./components/DetailPage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ar" element={<ARPage />} />
            <Route path="/details/:featuresName" element={<DetailPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
