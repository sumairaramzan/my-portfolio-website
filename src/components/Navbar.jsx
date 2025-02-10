import React from 'react';
import { Link } from 'react-scroll';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand text-white" href="#">Sumaira Ramzan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link text-white fs-5 hover-underline-animation">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link text-white fs-5 hover-underline-animation">About</Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link text-white fs-5 hover-underline-animation">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link text-white fs-5 hover-underline-animation">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
