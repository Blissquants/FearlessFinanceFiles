import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
import logo from '../assets/images/FullLogo.png';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
          <div className="logo-fill-line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;