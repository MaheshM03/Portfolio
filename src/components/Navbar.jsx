import React, { useState } from 'react';
import { config } from '../data/PortfolioData';
import useTheme from '../hooks/useTheme';
import { FaMoon, FaSun, FaBars, FaFileDownload } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleClick = () => setOpen(false);

  return (
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
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}

          {/* ✅ RESUME (DESKTOP) */}
          <a
    href="/resume/Mahesh_Misal_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="resume-link"
>
  Download Resume
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

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick}
            >
              {link.label}
            </a>
          ))}

          {/* ✅ RESUME (MOBILE) */}
          <a
              href="/resume/Mahesh_Misal_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={handleClick}
            className="mobile-resume"
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
