import React from 'react';

export default function Card({ title, tag, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="premium-card">
      <div>
        <span className="card-tag">{tag}</span>
        <h3 className="heavy-title" style={{fontSize: '1.8rem', textTransform: 'uppercase'}}>{title}</h3>
      </div>
      <span style={{fontSize: '1.5rem'}}>→</span>
    </a>
  );
}