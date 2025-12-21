import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.2 });

    els.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      observer.observe(el);
    });
  }, []);
}
