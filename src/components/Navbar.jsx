import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '2.5rem 8%', display: 'flex', justifyContent: 'space-between', zIndex: 1000 }}>
      <Link to="/" className="nav-link-custom" style={{fontSize: '0.8rem'}}>AKSHAY</Link>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <Link to="/about" className="nav-link-custom">ABOUT</Link>
        <Link to="/projects" className="nav-link-custom">PROJECTS</Link>
        <Link to="/contact" className="nav-link-custom">CONTACT</Link>
      </div>
    </nav>
  );
}