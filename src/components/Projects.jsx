import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio",
      category: "Web Design",
      link: "https://akshayajith.vercel.app/"
    },
    {
      title: "Resume Analyser",
      category: "In work",
      link: "https://github.com/akshayajithhh/resume-analyser"
    }
  ];

  return (
    <div style={{ padding: '150px 8%', minHeight: '100vh' }}>
      <h2
        style={{
          fontFamily: 'Archivo Black',
          fontSize: '3.5rem',
          marginBottom: '4rem'
        }}
      >
        PROJECTS
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}
      >
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div className="white-card">
              <span
                className="blue-span"
                style={{
                  fontWeight: '900',
                  fontSize: '0.7rem',
                  letterSpacing: '2px'
                }}
              >
                {project.category.toUpperCase()}
              </span>

              <h3
                style={{
                  fontSize: '2.2rem',
                  marginTop: '1rem',
                  fontFamily: 'Archivo Black'
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  marginTop: '2.5rem',
                  fontWeight: '800',
                  fontSize: '0.8rem'
                }}
              >
                VIEW PROJECT →
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
