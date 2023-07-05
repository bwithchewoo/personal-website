import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import photo from './Photo.jpg'
import medium from './medium.png'
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <div className="vertical-box">
            <img className="image" src={photo} style={{ width: 270, height: 320 }} />
            <p>Anna Cho</p>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/anna-cho-a30038167/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                <Linkedin className="icon" />
              </a>
              <a href="https://github.com/bwithchewoo" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                <GitHub className="icon" />
              </a>
              <a href="https://medium.com/@loveablessing" target="_blank" rel="noopener noreferrer" >
                <img src={medium} style={{ marginLeft: 5, width: 40, height: 40 }} />
              </a>
            </div>
          </div>

        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
