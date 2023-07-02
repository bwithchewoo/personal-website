import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import photo from './Photo.jpg'
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <div className="vertical-box">
            <img className="image" src={photo} style={{ width: 240, height: 320 }} />
            <p>Anna Cho</p>
            <div className="icons-container">
              <Linkedin className="icon" />
              <GitHub className="icon" />
            </div>
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
