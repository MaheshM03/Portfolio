import React from 'react';
import { projects } from '../data/PortfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon; // ✅ IMPORTANT

            return (
              <div key={index} className="project-card glass-effect fade-in-up">
                
                {/* PROJECT ICON */}
                <div className="project-icon">
                  <Icon size={32} /> {/* ✅ Dynamic icon */}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
