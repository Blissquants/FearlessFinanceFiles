import React, { useEffect, useRef } from 'react';
import './Partnership.css';

const Partnership = () => {
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

  const partnerships = [
    {
      id: 1,
      icon: '🏢',
      title: 'Corporates',
      description: 'Employee wellness through financial literacy'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Schools & Colleges',
      description: 'Curriculum integration for financial education'
    },
    {
      id: 3,
      icon: '❤️',
      title: 'NGOs & Communities',
      description: 'Awareness programs for underserved groups'
    }
  ];

  const benefits = [
    'Custom-tailored programs for your audience',
    'Experienced facilitators with real-world expertise',
    'Engaging, practical, and non-intimidating approach',
    'Measurable impact and follow-up support'
  ];

  return (
    <section className="partnership-section">
      <div className="partnership-container" ref={containerRef}>
        <div className="partnership-content">
          <div className="partnership-left">
            <h2 className="partnership-title">
              Let's Create Fearless Financial Futures Together
            </h2>
            <p className="partnership-description">
              Whether you're an organization looking to empower employees, a school wanting to educate students, or a community group seeking awareness — we're here to help.
            </p>

            <ul className="partnership-benefits">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="partnership-btn">
              Partner With Us
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="partnership-right">
            {partnerships.map((partnership) => (
              <div key={partnership.id} className="partnership-card">
                <div className="card-icon">{partnership.icon}</div>
                <div className="card-content">
                  <h3 className="card-title">{partnership.title}</h3>
                  <p className="card-description">{partnership.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;