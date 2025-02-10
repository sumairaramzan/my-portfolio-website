import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gradient text-white py-4">
      <div className="container text-center">
        <div className="row justify-content-between">
          {/* Branding */}
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">Sumaira Ramzan</h4>
            <p>Full Stack Developer | Passionate about building web solutions.</p>
          </div>

          {/* Quick Links */}
          {/* <div className="col-md-4 mb-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div> */}

          {/* Social Media Icons */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Follow Me</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-3 border-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Sumaira Ramzan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
