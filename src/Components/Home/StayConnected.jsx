import React, { useState, useEffect, useRef } from 'react';
import './StayConnected.css';

const StayConnected = () => {
  const [email, setEmail] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle StayConnected subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="StayConnected-section">
      <div className="StayConnected-container" ref={containerRef}>
        <h2 className="StayConnected-title">Stay Connected</h2>
        <p className="StayConnected-description">
          Get the latest updates on programs, workshops, and learning opportunities
        </p>

        <form className="StayConnected-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="StayConnected-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="StayConnected-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;