import React from 'react';

export default function Contact() {
  const email = "akshayajith46@gmail.com";
  const subject = encodeURIComponent("Inquiry");
  const body = encodeURIComponent("Hi Akshay,\n\nI would like to discuss a project.");

  return (
    <div style={{ padding: '150px 8%', minHeight: '100vh' }}>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: '3.5rem',
          marginBottom: '1.5rem'
        }}
      >
        LET'S WORK.
      </h2>

      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          maxWidth: '500px'
        }}
      >
        I am currently a B.Tech student at the College of Engineering Cherthala. To explore my projects in detail or discuss potential collaborations, please feel free to connect with me through the platforms mentioned below.
      </p>

      {/* Email Button */}
     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayajith46@gmail.com&su=Inquiry&body=Hi%20Akshay,"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-minimal"
>
  EMAIL VIA GMAIL
</a>

      <div style={{ marginTop: '6rem' }}>
        <p
          style={{
            fontWeight: '900',
            fontSize: '0.7rem',
            letterSpacing: '3px',
            marginBottom: '2rem',
            opacity: 0.5
          }}
        >
          SOCIAL CHANNELS
        </p>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <a
            href="https://instagram.com/akkssshhhayy"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-custom"
            style={{ color: '#0047FF' }}
          >
            INSTAGRAM
          </a>

          <a
            href="https://linkedin.com/in/akshay-a-811322291"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-custom"
            style={{ color: '#0047FF' }}
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/akshayajithhh"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link-custom"
            style={{ color: '#0047FF' }}
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}
