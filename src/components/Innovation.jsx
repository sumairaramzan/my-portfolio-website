import React, { useState } from 'react';
import '../App.css'; // Import custom CSS for styling

const Innovation = () => {
  // State to track which image is being hovered
  const [hoveredStack, setHoveredStack] = useState('');

  // Function to handle hover events
  const handleHover = (stack) => {
    setHoveredStack(stack);
  };

  // Dynamically set the image source, with default image when no hover
  const imageSrc = hoveredStack ? `/images/${hoveredStack}.jpg` : '/public/images/default.jpg';

  return (
    <section id="what-i-do" className="what-i-do py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-lg-6">
            <h2 className="what-i-do-title">What I Do</h2>
            <p className="what-i-do-subtitle">
              Where Innovation Meets Execution, and Every Interaction Unveils a Unique Solution.
            </p>
            <p className="what-i-do-text">
              I'm not just a service provider; I'm a creative visionary, a solution architect, and your collaborator in turning technical ideas into reality. Here in my tech haven, we embark on a journey where every concept, every project, is an opportunity to craft something truly exceptional.
            </p>
            <div className="what-i-do-services">
              <ul>
                <li
                  onMouseEnter={() => handleHover('laravel')}
                  onMouseLeave={() => handleHover('')}
                >
                  Laravel Development
                </li>
                <li
                  onMouseEnter={() => handleHover('reactJS')}
                  onMouseLeave={() => handleHover('')}
                >
                  ReactJS
                </li>
                <li
                  onMouseEnter={() => handleHover('figma')}
                  onMouseLeave={() => handleHover('')}
                >
                  Figma
                </li>
              </ul>
            </div>
          </div>

          {/* Right side image */}
          <div className="col-lg-6">
            <div className="image-container">
              <img
                src={imageSrc}  // Dynamically change image
                alt={hoveredStack || 'default'}
                className={`what-i-do-image img-fluid ${hoveredStack && 'image-change'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
