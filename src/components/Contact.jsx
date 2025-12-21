import React from 'react';
import { config } from '../data/PortfolioData';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp
} from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          <div className="contact-card glass-effect fade-in-up">
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="contact-links">
              {/* EMAIL */}
              <div className="contact-item">
                <FaEnvelope />
                <a href={`mailto:${config.email}`}>
                  {config.email}
                </a>
              </div>

              {/* PHONE (Click to Call) */}
              <div className="contact-item">
                <FaPhoneAlt />
                <a href={`tel:${config.phone}`}>
                  Call Me
                </a>
              </div>

              {/* WHATSAPP (Recommended) */}
              <div className="contact-item">
                <FaWhatsapp />
                <a
                  href={`https://wa.me/${config.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Me
                </a>
              </div>

              {/* GITHUB */}
              <div className="contact-item">
                <FaGithub />
                <a href={config.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              {/* LINKEDIN */}
              <div className="contact-item">
                <FaLinkedin />
                <a href={config.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <a href="#hero" className="contact-btn glow-effect">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
