import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering
          <br />
          <span className="hero-highlight">Fearless</span>
          Financial Freedom
        </h1>
        <p className="hero-subtitle">
          Educating financially curious minds to invest early, wisely, and fearlessly.
          <br />
          Money should empower your life — not control it.
        </p>
        <button className="hero-cta">
          Enrich Your Financial Quotient
        </button>
        <div className="hero-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;