import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const homeMatch = useMatch('/');
    const workMatch = useMatch('/work');
    const projectsMatch = useMatch('/projects');
    const contactMatch = useMatch('/contact');
    return (
        <div className="navbar">
            <Link to="/" className={`navbar-item ${homeMatch ? 'active' : ''}`} >Home</Link>
            <Link to="/work" className={`navbar-item ${workMatch ? 'active' : ''}`} >Work Experience</Link>
            <Link to="/projects" className={`navbar-item ${projectsMatch ? 'active' : ''}`} >Projects</Link>
            <Link to="/contact" className={`navbar-item ${contactMatch ? 'active' : ''}`} >Contact</Link>
        </div>
    );
}

export default Navbar;
