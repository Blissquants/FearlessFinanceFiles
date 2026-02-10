import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import FullLogo from "../../assets/images/FullLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Navigation links - commented for future use */}
        {/* <div className="navbar-links-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/what-we-do" className="nav-link">What We Do</Link>
        </div> */}

        <div className="navbar-logo">
          <Link to="/">
            <img src={FullLogo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Navigation links - commented for future use */}
        {/* <div className="navbar-links-right">
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;