import React from 'react';
import './YoutubeStories.css';

const YoutubeStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Understanding SIP Investing',
      description: 'A simple guide to systematic investment planning and how it helps you build wealth over time.',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1'
    },
    {
      id: 2,
      title: 'The Power of Compounding',
      description: 'Discover how small investments can grow exponentially with the magic of compound interest.',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2'
    },
    {
      id: 3,
      title: 'Risk Management Basics',
      description: 'Learn essential strategies to protect your investments and manage financial risks effectively.',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3'
    }
  ];

  return (
    <section className="stories-section">
      <div className="stories-container">
        <div className="stories-header">
          <h2 className="stories-title">Fearless Finance Stories</h2>
          <p className="stories-description">
            We share real stories of real people, case studies, and simple content to help you understand money without the jargon.
          </p>
          <button className="stories-btn">
            Explore All Resources
            <span className="arrow-icon">→</span>
          </button>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="video-wrapper">
                <iframe
                  src={story.videoUrl}
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
              <div className="card-content">
                <h3 className="card-title">{story.title}</h3>
                <p className="card-description">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeStories;