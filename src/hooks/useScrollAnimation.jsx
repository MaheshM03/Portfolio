import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
          // Don't disconnect immediately to allow re-animation if needed
        }
      });
    }, observerOptions);

    // Observe all animation elements
    const elements = document.querySelectorAll(
      '.fade-in-up, .slide-in-left, .slide-in-right, .scale-in'
    );
    elements.forEach((el) => observer.observe(el));

    // Navbar scroll shadow effect
    const navbar = document.querySelector('.nav-modern');
    const handleNavScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll);

    // Smooth scroll with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = 80; // Height of fixed navbar
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);
};

export default useScrollAnimation;