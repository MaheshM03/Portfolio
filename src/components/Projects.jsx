import React from 'react';
import { projects } from '../data/PortfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div key={index} className="project-card-enhanced glass-effect fade-in-up">
                
                {/* PROJECT ICON */}
                <div className="project-icon-wrapper">
                  <Icon size={32} />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* HOVER OVERLAY WITH BUTTONS */}
                <div className="project-overlay">
                  <div className="project-buttons">
                    {project.liveUrl && (
                      <a 
                        href= "https://www.qurinomsolutions.com/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn project-btn-live"
                      >
                        <FaExternalLinkAlt /> View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-btn project-btn-code"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}