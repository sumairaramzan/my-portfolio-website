import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Experience from './Experience';
import Innovation from './Innovation';
import Expertise from './Expertise';
import Footer from './Footer';

const MainHome = () => {
  return (
    <>
      <Navbar />
     <Home />
      <About />
      <Expertise />
      <Projects />
      <Innovation />
      <Experience /> 
      <Contact />
      <Footer />
    </>
  )
};

export default MainHome;
