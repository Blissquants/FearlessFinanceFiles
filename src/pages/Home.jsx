import React from 'react';
import './Home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="sparkle-icon">✨</span>
            <span>Inspire • Educate • Empower</span>
          </div>
          
          <h1 className="hero-title">
            Empowering <span className="highlight">Fearless</span> Financial Freedom
          </h1>
          
          <p className="hero-description">
            Educating financially curious minds to invest early, wisely, and fearlessly.
            Money should empower your life — not control it.
          </p>
          
          <blockquote className="hero-quote">
            "We help financially curious minds become fearless with finances."
          </blockquote>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Get Started <span className="arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              Partner With Us
            </button>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="hero-info">
          {/* Vision Card */}
          <div className="info-card vision-card">
            <div className="card-header">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>Our Vision</h3>
            </div>
            <p className="card-text">
              Empowering and spreading fearless financial freedom to every financially curious mind across communities.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="info-card mission-card">
            <div className="card-header">
              <div className="icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3>Our Mission</h3>
            </div>
            <ul className="mission-list">
              <li>
                <span className="check-icon">✓</span>
                Create financial awareness among financially curious minds
              </li>
              <li>
                <span className="check-icon">✓</span>
                Remove fear around money, investing, and wealth creation
              </li>
              <li>
                <span className="check-icon">✓</span>
                Enable early, mindful, and informed investing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;