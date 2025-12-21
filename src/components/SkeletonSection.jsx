import React from 'react';

export default function SkeletonSection() {
  return (
    <div className="section">
      <div className="container">
        <div className="glass-effect">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  );
}
