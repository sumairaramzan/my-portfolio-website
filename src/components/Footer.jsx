import React from "react";
import "../App.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
  FaReact,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-section text-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Column 1 - About */}
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold">Sumaira Ramzan</h4>
            <p className="">
              Full Stack Developer passionate about React.js, Laravel, MongoDB, and building exceptional digital experiences.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Explore</h5>
            <ul className="list-unstyled small">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Tech Stack */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Tech Stack</h5>
            <div className="d-flex flex-wrap gap-3 text-light">
              <FaReact title="React.js" size={24} className="tech-icon text-info" />
              <FaNodeJs title="Node.js" size={24} className="tech-icon text-success" />
              <FaLaravel title="Laravel" size={24} className="tech-icon text-danger" />
              <SiMongodb title="MongoDB" size={24} className="tech-icon text-success" />
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold mb-3">Newsletter</h5>
            <p className="small">Get portfolio updates & dev tips!</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Socials */}
        <div className="text-center mt-5 mb-3">
          <div className="d-flex justify-content-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sumaira-ramzan-a66923223/" target="_blank" rel="noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/sumairaramzan/" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <hr className="border-light-subtle" />
        <div className="d-flex justify-content-between align-items-center flex-wrap small">
          <p className="mb-0">&copy; {new Date().getFullYear()} Sumaira Ramzan. All rights reserved.</p>
          <button onClick={scrollToTop} className="btn btn-outline-light btn-sm rounded-circle back-to-top">
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
