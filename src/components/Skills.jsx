import React from 'react';
import { skills } from '../data/PortfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>

        <div className="grid-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon; // ✅ IMPORTANT

            return (
              <div key={i} className="glass-effect fade-in-up">
                
                {/* ICON */}
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Icon /> {/* ✅ RENDER ICON AS JSX */}
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                  {skill.title}
                </h3>

                <p style={{ opacity: 0.9 }}>
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
