import React from 'react';
export default function Blog() {
  const posts = [
    {
      title: 'How I Build Scalable React Apps',
      desc: 'Best practices, folder structure, and performance tips.',
      link: '#'
    },
    {
      title: 'JavaScript Performance Tricks',
      desc: 'Optimizing JS for real-world projects.',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="section-title">Articles & Blogs</h2>

        <div className="grid-2">
          {posts.map((p, i) => (
            <div key={i} className="glass-effect fade-in-up">
              <h3>{p.title}</h3>
              <p style={{ opacity: 0.85 }}>{p.desc}</p>
              <a href={p.link} style={{ color: 'var(--primary-color)' }}>
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
