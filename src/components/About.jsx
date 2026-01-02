import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '150px 8% 80px 8%', minHeight: '100vh' }}>
      {/* Title Reveal */}
      <div className="reveal-wrapper">
        <h2 className="reveal-text" style={{ fontFamily: 'Archivo Black', fontSize: '3.5rem', marginBottom: '2rem' }}>
          ABOUT ME
        </h2>
      </div>

      {/* Paragraph Fade-in */}
 <div
  className="fade-in-text"
  style={{
    fontSize: '1.3rem',
    lineHeight: '1.7',
    maxWidth: '800px',
    marginBottom: '5rem',
    animationDelay: '0.3s'
  }}
>
  <p style={{ marginBottom: '1.8rem' }}>
    I am a B.Tech Computer Science student based in Kerala, currently studying at the College of Engineering Cherthala. I am focused on learning and building in the field of web development.
  </p>

  <p>
    At present, I work on developing clean and responsive user interfaces while strengthening my understanding of backend fundamentals through personal and academic projects.
  </p>
</div>

      {/* Education Section */}
      <div style={{ borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '3rem' }}>
        <div className="reveal-wrapper">
          <p className="reveal-text blue-span" style={{ fontWeight: '900', letterSpacing: '3px', marginBottom: '2.5rem', animationDelay: '0.5s' }}>
            EDUCATION DETAILS
          </p>
        </div>

        <div className="fade-in-text" style={{ marginBottom: '3rem', animationDelay: '0.7s' }}>
          <h4 style={{ fontSize: '1.8rem', fontWeight: '800' }}>B.Tech Computer Science</h4>
          <p style={{ color: '#555', marginTop: '0.5rem' }}>2023 — Present | Currently Pursuing</p>
        </div>

        <div className="fade-in-text" style={{ animationDelay: '0.9s' }}>
          <h4 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Higher Secondary</h4>
          <p style={{ color: '#555', marginTop: '0.5rem' }}>Computer Science Stream | Completed</p>
        </div>
      </div>
    </div>
  );
}