import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
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
  const Course = [
    {
      id: 1,
      title: 'Fearless Financial Investment',
      badge: 'POPULAR',
      audience: 'Financially curious minds',
      duration: 'Three-Day Course',
      description: 'Build confidence in investing, understand markets, and create your investment strategy',
      isPopular: true,
      link: '/courses/financial-investment'
    },
    {
      id: 2,
      title: 'Fearless Financial Trading',
      audience: 'Aspiring traders',
      duration: 'Three-Day Course',
      description: 'Master trading fundamentals, risk management, and develop your trading mindset',
      isPopular: false,
      link: '/courses/financial-trading'
    },
    {
      id: 3,
      title: 'Fearless Options Mastery',
      audience: 'Traders ready to level up',
      duration: 'Three-Month Course',
      description: 'Advanced options strategies, delta hedging, and professional-level options trading',
      isPopular: false,
      link: '/courses/options-mastery'
    },
    {
      id: 4,
      title: 'Teens\' Financial Awareness Program',
      badge: 'POPULAR',
      audience: 'Teenagers & Students',
      duration: 'Three-Day Course',
      description: 'Early financial literacy, savings habits, and smart money management for teens',
      isPopular: true,
      link: '/courses/teens-financial-awareness'
    },
    {
      id: 5,
      title: 'Enrich Your Financial Quotient',
      audience: 'Professionals & Beginners',
      duration: 'Workshop',
      description: 'Boost your financial intelligence and make informed decisions about money management and wealth building',
      isPopular: false,
      link: '/courses/financial-quotient'
    },
    {
      id: 6,
      title: 'Women\' Financial Awareness Program',
      badge: 'POPULAR',
      audience: 'Women & Homemakers',
      duration: 'Workshop',
      description: 'Empowering women with financial independence through smart investing, savings strategies, and wealth creation',
      isPopular: true,
      link: '/courses/women-financial-awareness'
    }
  ];

  return (
    <section className="programs-section">
      <div className="programs-container" ref={containerRef}>
        <div className="programs-header">
          <h2 className="programs-title">Start Your Fearless Finance Journey</h2>
          <p className="programs-description">
            Choose a program that fits your needs. All sessions are designed to be practical, engaging, and immediately actionable.
          </p>
          <button className="programs-main-btn">
            Start Your Fearless Finance Journey
          </button>
        </div>

        <div className="programs-grid">
          {Course.map((program) => (
            <div 
              key={program.id} 
              className={`program-card ${program.isPopular ? 'popular-card' : ''}`}
            >
              {program.badge && (
                <span className="program-badge">{program.badge}</span>
              )}
              
              <h3 className="program-title">{program.title}</h3>
              
              <div className="program-meta">
                <div className="meta-item">
                  <svg className="meta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{program.audience}</span>
                </div>
                <div className="meta-item">
                  <svg className="meta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{program.duration}</span>
                </div>
              </div>
              
              <p className="program-description">{program.description}</p>
              
              <Link to={program.link} className="program-btn">
                Learn More
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;