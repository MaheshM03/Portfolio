import React from 'react';
import { education } from '../data/PortfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-list">
          {education.map((edu, index) => {
            const Icon = edu.icon; // ✅ IMPORTANT

            return (
              <div key={index} className="education-card glass-effect fade-in-up">
                
                {/* EDUCATION ICON */}
                <div className="education-icon">
                  <Icon size={30} />
                </div>

                <div className="education-content">
                  <h3 className="education-title">{edu.title}</h3>

                  {edu.school && (
                    <p className="education-meta">
                      {edu.school} | {edu.year}
                    </p>
                  )}

                  {edu.sub && <p className="education-sub">{edu.sub}</p>}

                  {edu.list && (
                    <ul className="education-points">
                      {edu.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
