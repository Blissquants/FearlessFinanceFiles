import React, { useEffect, useRef, useState } from 'react';
import './Visionaries.css';

// Import your images here
// import falguniImage from './assets/images/falguni-vahora.jpg';
import ShilpaImage from '../../assets/images/shilpa-singh.png';
import FalguniImage from '../../assets/images/falguni-vahora.jpg';


const Visionaries = () => {
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

  const visionaries = [
    {
      id: 1,
      name: 'Falguni Vahora',
      initials: 'FV',
      image: FalguniImage,
      tagline: 'Turning Numbers into Narratives',
      roles: ['Fearless Finance Coach', 'Author', 'Trader', 'Investor'],
      quote: '"Financial awareness is the first step towards financial freedom. Let\'s take it together."',
      links: [
        { type: 'linkedin', text: 'Connect on LinkedIn', url: 'https://linkedin.com/in/falgunivahora' },
        { type: 'website', text: 'Visit BlissQuants', url: 'https://blissquants.com' },
        { type: 'personal', text: 'falgunivahora.com', url: 'https://falgunivahora.com' }
      ]
    },
    {
      id: 2,
      name: 'Shilpa Singh',
      initials: 'SS',
      image: ShilpaImage,
      tagline: 'Making Finance Feel Like a Friend',
      roles: ['Finance Enthusiast', 'Mindset Coach', 'Community Builder'],
      quote: '"When you understand money, you understand freedom. It\'s never too early or too late to start."',
      links: [
        { type: 'linkedin', text: 'Connect on LinkedIn', url: 'https://linkedin.com/in/shilpasingh' },
        { type: 'personal', text: 'shilpasingh.com', url: 'https://shilpasingh.com' }
      ]
    }
  ];

  // Component to handle image with fallback
  const AvatarImage = ({ image, initials, name }) => {
    const [imageError, setImageError] = useState(false);

    if (!image || imageError) {
      return <div className="visionary-avatar-initials">{initials}</div>;
    }

    return (
      <img 
        src={image} 
        alt={name}
        className="visionary-avatar-image"
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <section className="visionaries-section">
      <div className="visionaries-container" ref={containerRef}>
        <div className="visionaries-header">
          <h2 className="visionaries-title">The Visionaries</h2>
          <p className="visionaries-description">
            Two passionate leaders combining expertise in finance, education, and real-world investing to transform how you think about money.
          </p>
        </div>

        <div className="visionaries-grid">
          {visionaries.map((person) => (
            <div key={person.id} className="visionary-card">
              <div className="visionary-header">
                <div className="visionary-avatar">
                  <AvatarImage 
                    image={person.image} 
                    initials={person.initials}
                    name={person.name}
                  />
                </div>
                <div className="visionary-info">
                  <h3 className="visionary-name">{person.name}</h3>
                  <p className="visionary-tagline">{person.tagline}</p>
                </div>
              </div>

              <div className="visionary-roles">
                {person.roles.map((role, index) => (
                  <span key={index} className="role-badge">{role}</span>
                ))}
              </div>

              <div className="visionary-quote">
                <div className="quote-icon">"</div>
                <p className="quote-text">{person.quote}</p>
              </div>

              <div className="visionary-links">
                {person.links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="visionary-link"
                  >
                    {link.type === 'linkedin' && (
                      <svg className="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                        <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                        <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
                      </svg>
                    )}
                    <span>{link.text}</span>
                    <span className="arrow-right">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visionaries;