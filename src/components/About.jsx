import React from 'react';
import sumairaImg from '../assets/images/sumaira.jpeg';

const About = () => {
  return (
    <section id="about-me" className="about-me-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 about-me-img">
            <img
              src={sumairaImg}  // Your image here
              alt="About Me"
              className="img-fluid rounded-circle custom-image"
            />
          </div>

          {/* Right Side - Text */}
          <div className="col-lg-6 text-dark">
            <h2 className="about-me-title text-dark">Greetings!</h2>
            <h3 className="about-me-subtitle text-dark">
              I am a passionate and innovative Software Engineer dedicated to using the latest technology to create amazing digital experiences.
            </h3>
            <p className="about-me-description text-dark">
              With expertise in various technologies and a deep passion for crafting high-quality software, I thrive in transforming concepts into reality. Whether it's frontend development, backend architecture, or full-stack solutions, I enjoy solving complex challenges and continuously pushing the limits of innovation.
            </p>
            <p className="about-me-description text-dark">
              I am constantly exploring new tools and technologies to keep myself ahead in the ever-evolving tech landscape. Collaboration, innovation, and precision are the pillars of my approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
