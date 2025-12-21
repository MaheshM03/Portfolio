import React from 'react';
import { config } from '../data/PortfolioData'; 

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-center border-t border-[var(--primary-color)]/30">
      <p className="opacity-80 text-lg">
        © {new Date().getFullYear()} <span className="font-bold text-[var(--primary-color)]">{config.name}</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;