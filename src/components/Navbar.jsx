import React, { useState, useEffect } from 'react';
import { config } from '../data/PortfolioData';
import useTheme from '../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaFileDownload } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  /* 🔥 Highlight active section */
  useEffect(() => {
    const onScroll = () => {
      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* 🔥 Auto close menu on scroll */
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, [open]);

  return (
    <>
      <nav className="nav-modern">
        <div className="nav-inner">

          {/* Logo */}
          <div
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {config.name}
          </div>

          {/* Desktop Links */}
          <div className="nav-links desktop-only">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}

            {/* Resume */}
            <a
              href="/resume/Mahesh_Misal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              <FaFileDownload /> Resume
            </a>
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </button>

            <button className="menu-btn" onClick={() => setOpen(!open)}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* 🔥 BACKDROP */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

      {/* 🔥 MOBILE MENU */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="/resume/Mahesh_Misal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="mobile-resume"
        >
          <FaFileDownload /> Download Resume
        </a>
      </div>
    </>
  );
}
