import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;

      // scroll cheyumbo hide aakum
      if (current > lastScroll && current > 80) {// scroll cheyumbo ithinte value 80 above pokum condition true aakum 
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${hidden ? 'navbar--hidden' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '2.5rem 8%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 1000,
        background: 'transparent'
      }}
    >
      <Link to="/" className="nav-link-custom" style={{ fontSize: '0.8rem' }}>
        AKSHAY
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/about" className="nav-link-custom">ABOUT</Link>
        <Link to="/projects" className="nav-link-custom">PROJECTS</Link>
        <Link to="/contact" className="nav-link-custom">CONTACT</Link>
      </div>
    </nav>
  );
}
