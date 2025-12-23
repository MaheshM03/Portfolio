import React from 'react';
import { skills } from '../data/PortfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Arsenal</h2>

        <div className="grid-3">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const proficiency = skill.proficiency || 85; // Default 85% if not specified

            return (
              <div key={i} className="skill-card-enhanced glass-effect fade-in-up">
                
                {/* CIRCULAR PROGRESS */}
                <div className="skill-circle-wrapper">
                  <svg className="skill-circle" viewBox="0 0 120 120">
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="var(--border-color)"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="var(--primary-color)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 54}`}
                      strokeDashoffset={`${2 * Math.PI * 54 * (1 - proficiency / 100)}`}
                      className="skill-progress-circle"
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  </svg>
                  
                  {/* Icon in Center */}
                  <div className="skill-icon-center">
                    <Icon size={32} />
                  </div>
                  
                  {/* Percentage */}
                  <div className="skill-percentage">{proficiency}%</div>
                </div>

                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>

                {/* Linear Progress Bar Alternative */}
                <div className="skill-bar-wrapper">
                  <div 
                    className="skill-bar-fill"
                    style={{
                      width: `${proficiency}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}