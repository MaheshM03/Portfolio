import React from 'react';
import { config } from '../data/PortfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="glass-effect fade-in-up">
          <p style={{ fontSize: '1.2rem', lineHeight: 1.7 }}>
            {config.about}
          </p>
        </div>
      </div>
    </section>
  );
}
