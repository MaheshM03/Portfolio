import React, { lazy, Suspense, useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LazyOnView from './components/LazyOnView';
import SkeletonSection from './components/SkeletonSection';
import useReveal from './hooks/useReveal';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { config } from './data/PortfolioData';

// Custom Cursor Component
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      '.glass-effect, .highlight-card, .project-card-enhanced, .experience-card, .education-card, .contact-action-btn, .social-link, .nav-links a, .hero-btn, .submit-btn, .resume-link, .back-to-top-btn'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      />
      <div
        className={`cursor-outline ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
}

// 🔹 Lazy-loaded sections
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Blog = lazy(() => import('./components/Blog'));

function App() {
  // trigger scroll reveal animations
  useReveal();

  // Scroll to top functionality
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ===== Always-loaded sections (above the fold) ===== */}
      <Navbar />
      <Hero />
      <About />
      <Skills />

      {/* ===== Lazy + Scroll loaded sections ===== */}
      <LazyOnView>
        <Suspense fallback={<SkeletonSection />}>
          <Projects />
        </Suspense>
      </LazyOnView>

      <LazyOnView>
        <Suspense fallback={<SkeletonSection />}>
          <Experience />
        </Suspense>
      </LazyOnView>

      <LazyOnView>
        <Suspense fallback={<SkeletonSection />}>
          <Education />
        </Suspense>
      </LazyOnView>

      {/* <LazyOnView>
        <Suspense fallback={<SkeletonSection />}>
          <Blog />
        </Suspense>
      </LazyOnView> */}

      {/* ===== Footer & Contact ===== */}
      <Contact />
      <Footer />

      {/* ===== Floating Social Icons ===== */}
      <div className="social-float">
        <a href={config.github} target="_blank" rel="noreferrer" title="GitHub Profile">
          <FaGithub />
        </a>
        <a href={config.linkedin} target="_blank" rel="noreferrer" title="LinkedIn Profile">
          <FaLinkedin />
        </a>
      </div>

      {/* ===== Scroll to Top Button ===== */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default App;
