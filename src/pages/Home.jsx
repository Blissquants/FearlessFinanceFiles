import React from 'react';
import Hero from '../Components/Home/Hero';
import YoutubeStories from '../Components/Home/YoutubeStories';
import Courses from '../Components/Home/Courses';
import Visionaries from '../Components/Home/Visionaries';
import Partnership from '../Components/Home/Partnership';
import StayConnected from '../Components/Home/StayConnected';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {/* Add other sections of your homepage below */}
      <YoutubeStories/>
      <Courses/>
      <Visionaries/>
      <Partnership/>
      <StayConnected/>
    </div>
  );
};

export default Home;