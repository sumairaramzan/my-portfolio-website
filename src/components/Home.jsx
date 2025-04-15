import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero-section">
    {/* Video Background */}
    <video autoPlay loop muted playsInline className="bg-video">
      <source 
        src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F67988ed24841623ccd9affd6_homepage%20global%20%281%29-transcode.mp4" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
    <div className="overlay-filter"></div>
    {/* Foreground Content */}
    <div className="content-overlay text-white text-center">
      <div className="container py-5">
        <h1 className="display-4">Sumaira Ramzan</h1>
        <p className="lead">Full Stack Developer</p>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
      </div>
    </div>
  </section>
  );
};

export default Home;
