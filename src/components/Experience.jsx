import React from 'react';
import { experience } from '../data/PortfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-list">
          {experience.map((job, index) => {
            const Icon = job.icon; // ✅ IMPORTANT

            return (
              <div key={index} className="experience-card glass-effect fade-in-up">
                
                {/* EXPERIENCE ICON */}
                <div className="experience-icon">
                  <Icon size={30} />
                </div>

                <div className="experience-content">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-meta">
                    {job.company} | {job.year}
                  </p>

                  <ul className="experience-points">
                    {job.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
