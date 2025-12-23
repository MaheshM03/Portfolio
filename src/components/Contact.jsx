import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '../data/PortfolioData';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaTimes
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: config.email
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

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

          {/* CONTACT FORM */}
          <div className="contact-form-card glass-effect">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="status-message success">
                  <FaCheck /> Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="status-message error">
                  <FaTimes /> Failed to send message. Please try again or contact me directly.
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="spinner"></div> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
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
