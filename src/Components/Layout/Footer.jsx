import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Contact', path: '/contact' }
  ];

  const learningTracks = [
    { name: 'Professional Development', path: '/tracks/professional' },
    { name: 'Personal Growth', path: '/tracks/personal' },
    { name: 'Community Impact', path: '/tracks/community' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/support' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Learning Tracks</h3>
            <ul className="footer-links">
              {learningTracks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Fearless Finance Files. All rights reserved.
          </p>
          <p className="footer-sister">
            Sister entity of{' '}
            <a 
              href="https://blissquants.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="blissquants-link"
            >
              BlissQuants
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;