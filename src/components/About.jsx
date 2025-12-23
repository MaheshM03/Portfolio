import React from 'react';
import { config } from '../data/PortfolioData';
import {
  FaCode,
  FaRocket,
  FaBrain,
  FaUsers,
  FaProjectDiagram,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Main About Content */}
          <div className="about-main glass-effect fade-in-up">
            <div className="about-text">
              <p className="about-description">
                {config.about}
              </p>

              <div className="about-quote">
                <blockquote>
                  "Innovation happens at the intersection of technology and creativity.
                  I strive to build solutions that not only work flawlessly but also
                  inspire and delight users."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="about-highlights">
            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <h3>Full Stack Expertise</h3>
              <p>Proficient in modern web technologies, from responsive frontends to scalable backends</p>
            </div>

            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FaBrain />
              </div>
              <h3>AI Integration</h3>
              <p>Specialized in prompt engineering and AI-powered application development</p>
            </div>

            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FaRocket />
              </div>
              <h3>Performance Focus</h3>
              <p>Committed to building fast, efficient, and user-centric digital experiences</p>
            </div>

            <div className="highlight-card glass-effect">
              <div className="highlight-icon">
                <FaUsers />
              </div>
              <h3>Collaborative Spirit</h3>
              <p>Experienced in agile development and cross-functional team collaboration</p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="about-stats glass-effect">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
