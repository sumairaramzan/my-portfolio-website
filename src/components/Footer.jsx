import React from "react";
import "../App.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
  
    <footer className="footer text-white py-4">
      <div className="container text-center">
        <div className="row justify-content-between">
         
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">Sumaira Ramzan</h4>
            <p>Full Stack Developer | Passionate about building web solutions.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Follow Me</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/sumaira-ramzan-a66923223/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://github.com/sumairaramzan/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            </div>
          </div>
        </div>
        <hr className="my-3 border-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Sumaira Ramzan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
