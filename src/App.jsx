import React, { lazy, Suspense } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LazyOnView from './components/LazyOnView';
import SkeletonSection from './components/SkeletonSection';
import useReveal from './hooks/useReveal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// 🔹 Lazy-loaded sections
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Blog = lazy(() => import('./components/Blog'));

function App() {
  // trigger scroll reveal animations
  useReveal();

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
  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    <FaLinkedin />
  </a>
</div>
    </>
  );
}

export default App;
