import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const homeMatch = useMatch('/');
    const aboutMatch = useMatch('/about');
    const servicesMatch = useMatch('/services');
    const contactMatch = useMatch('/contact');
    return (
        <div className="navbar">
            <Link to="/" className={`navbar-item ${homeMatch ? 'active' : ''}`} >Home</Link>
            <Link to="/about" className={`navbar-item ${aboutMatch ? 'active' : ''}`} >About</Link>
            <Link to="/services" className={`navbar-item ${servicesMatch ? 'active' : ''}`} >Services</Link>
            <Link to="/contact" className={`navbar-item ${contactMatch ? 'active' : ''}`} >Contact</Link>
        </div>
    );
}

export default Navbar;
