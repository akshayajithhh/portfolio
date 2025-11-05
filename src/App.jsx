import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Styles
  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif",
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1a1a1a',
      zIndex: 1000,
      padding: '1rem 0',
      transform: activeSection === 'home' ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#ffffff',
      cursor: 'pointer',
      letterSpacing: '0.1em',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: '#a0a0a0',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '400',
      letterSpacing: '0.1em',
      padding: '0.5rem 0'
    },
    homeSection: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem'
    },
    homeContent: {
      maxWidth: '800px'
    },
    mainName: {
      fontSize: 'clamp(4rem, 15vw, 10rem)',
      fontWeight: '300',
      color: '#ffffff',
      margin: '0 0 1rem 0',
      letterSpacing: '-0.03em'
    },
    homeSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      color: '#a0a0a0',
      fontWeight: '300',
      letterSpacing: '0.2em',
      marginBottom: '3rem'
    },
    scrollIndicator: {
      color: '#a0a0a0',
      cursor: 'pointer',
      fontSize: '0.9rem',
      letterSpacing: '0.1em'
    },
    scrollText: {
      display: 'block',
      marginBottom: '0.5rem'
    },
    scrollArrow: {
      fontSize: '1.5rem'
    },
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 2rem 2rem 2rem'
    },
    sectionContent: {
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '300',
      color: '#ffffff',
      marginBottom: '3rem',
      letterSpacing: '-0.02em'
    },
    text: {
      fontSize: '1.1rem',
      color: '#a0a0a0',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontWeight: '300'
    },
    educationItem: {
      marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid #1a1a1a'
    },
    educationTitle: {
      fontSize: '1.3rem',
      fontWeight: '400',
      color: '#ffffff',
      marginBottom: '0.5rem'
    },
    educationDetail: {
      fontSize: '1rem',
      color: '#a0a0a0',
      marginBottom: '0.25rem'
    },
    connectLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      marginBottom: '3rem'
    },
    connectLink: {
      padding: '1.5rem 0',
      borderBottom: '1px solid #1a1a1a',
      color: '#a0a0a0',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '300',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    linkArrow: {
      color: '#fbbf24',
      fontSize: '1.2rem'
    },
    contactInfo: {
      marginBottom: '2rem'
    },
    contactItem: {
      fontSize: '1rem',
      color: '#a0a0a0',
      marginBottom: '0.5rem'
    },
    githubMessage: {
      padding: '1rem 0',
      borderBottom: '1px solid #1a1a1a'
    },
    messageText: {
      fontSize: '0.9rem',
      color: '#666666',
      fontStyle: 'italic',
      margin: 0
    }
  };

  return (
    <div style={styles.app}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo} onClick={() => scrollToSection('home')}>
            AKSHAY AJITH
          </div>
          <div style={styles.navLinks}>
            {['about', 'education', 'connect'].map(section => (
              <button
                key={section}
                style={{
                  ...styles.navLink,
                  color: activeSection === section ? '#fbbf24' : '#a0a0a0',
                }}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" style={styles.homeSection}>
        <div style={styles.homeContent}>
          <h1 style={styles.mainName}>AKSHAY</h1>
          <p style={styles.homeSubtitle}>FULL STACK DEVELOPER • ENGINEER • DRUMMER</p>
          <div style={styles.scrollIndicator} onClick={() => scrollToSection('about')}>
            <span style={styles.scrollText}>Scroll</span>
            <div style={styles.scrollArrow}>↓</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About</h2>
          <div>
            <p style={styles.text}>
              I'm a passionate web developer exploring modern technologies and building meaningful digital experiences. My journey began with curiosity and evolved into creating clean, user-focused interfaces.
            </p>
            <p style={styles.text}>
              I believe in learning by building. Every project teaches me something new as I expand from frontend to full-stack development.
            </p>
            <p style={styles.text}>
              Beyond code, I'm an automobile enthusiast, music lover, and gamer. These passions keep my creative spirit alive.
            </p>
            <p style={styles.text}>
              At my core, I enjoy growing, creating, and constantly leveling up—both as a developer and as a person.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={styles.educationItem}>
            <h3 style={styles.educationTitle}>Bachelor of Technology</h3>
            <p style={styles.educationDetail}>Computer Science & Engineering</p>
            <p style={styles.educationDetail}>Currently Pursuing</p>
          </div>
          <div style={styles.educationItem}>
            <h3 style={styles.educationTitle}>Higher Secondary Education</h3>
            <p style={styles.educationDetail}>Computer Science Stream</p>
            <p style={styles.educationDetail}>Completed</p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Connect</h2>
          
          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <p style={styles.contactItem}>📍 Kerala, India</p>
            <p style={styles.contactItem}>📱 +91 8075591854</p>
             <p style={styles.contactItem}>Gmail:akshayajith46@gmail.com</p>
          </div>

          {/* Social Links */}
          <div style={styles.connectLinks}>
            <a
              href="https://www.instagram.com/akkssshhhayy"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.connectLink}
            >
              Instagram
              <span style={styles.linkArrow}>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-a-811322291"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.connectLink}
            >
              LinkedIn
              <span style={styles.linkArrow}>→</span>
            </a>
            <div style={styles.githubMessage}>
              <p style={styles.messageText}>Check out my projects and code</p>
            </div>
            <a
              href="https://github.com/akshayajithhh"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.connectLink}
            >
              GitHub
              <span style={styles.linkArrow}>→</span>
            </a>
          </div>

          {/* Additional Info */}
          <div>
            <p style={styles.text}>
              Thanks for visiting and Stay Connected!!!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;