import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';  // Custom styles

const HeroSection = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1200 } });

  return (
    <div className="hero-section">
      <animated.div style={fadeIn}>
        <h1>Your Name</h1>
        <h3>Full-Stack Developer | Software Engineer</h3>
        <p className="intro-text">Building Scalable Web Applications</p>
      </animated.div>
    </div>
  );
};

export default HeroSection;
