import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8%' }}>
      <div className="hero-title">
        <span className="reveal-wrapper">
          <span className="reveal-text">AKSHAY</span>
        </span>
        <span className="reveal-wrapper">
          <span className="reveal-text blue-span" style={{ animationDelay: '0.1s' }}>AJITH.</span>
        </span>
      </div>
      <Link to="/about" className="btn-minimal hero-btn">KNOW MORE</Link>
    </section>
  );
}