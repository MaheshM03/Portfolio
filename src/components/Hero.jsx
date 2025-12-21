import React from 'react';
import { config } from '../data/PortfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
       <img
        src="/images/Mahesh.jpg"
        alt="Mahesh Misal"
        className="hero-image"
      />

      <div className="hero-bg-glow"></div>

      <div className="hero-content fade-in-up">
        <h1 className="hero-title">{config.name}</h1>
        <p className="hero-tagline">{config.tagline}</p>

        <a href="#contact" className="hero-btn glow-effect">
          Let’s Work Together ✨
        </a>
      </div>
    </section>
  );
}
