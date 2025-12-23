import React from 'react';
import { config } from '../data/PortfolioData';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';

export default function Contact() {


  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Let's collaborate and bring your ideas to life
        </p>

        <div className="contact-grid">

          {/* CONTACT INFO CARD */}
          <div className="contact-info-card glass-effect">
            <div className="contact-header">
              <h3>Let's Connect</h3>
              <p>
                Click an option below to contact me directly.
              </p>
            </div>

            <div className="contact-details">

              <button
                className="contact-action-btn"
                onClick={() => window.location.href = `mailto:${config.email}`}
              >
                <FaEnvelope /> Email Me
              </button>

              <button
                className="contact-action-btn"
                onClick={() => window.location.href = `tel:${config.phone}`}
              >
                <FaPhoneAlt /> Call Me
              </button>

              <button
                className="contact-action-btn"
                onClick={() => window.open(`https://wa.me/${config.whatsapp}`, '_blank')}
              >
                <FaWhatsapp /> WhatsApp
              </button>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                Maharashtra, India
              </div>
              <div className="contact-meta-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                Response within 24 hours
              </div>
            </div>

            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href={config.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={config.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <a href="#hero" className="back-to-top-btn">
            Back to Top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
