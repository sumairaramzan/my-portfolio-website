import React from "react";
import remotepad from "../assets/images/remotepad.png"
import teamup from "../assets/images/teamup.png"
import doctor from "../assets/images/doctor365.png"
const Projects = () => {
  return (
    <section id="projects" className="projects py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={remotepad}
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">TheRemotePad</h5>
                <p className="card-text">
                  The Remote Pad is a platform designed to connect companies
                  with top-tier remote software developers, facilitating
                  efficient project development regardless of geographical
                  location. The website emphasizes its ability to empower
                  projects by providing handpicked remote developer teams.
                </p>
                <a href="https://theremotepad.com/" className="btn btn-primary mt-auto">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={teamup}
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">TeamUpPartner</h5>
                <p className="card-text">
                  TeamUp Partners is an organization dedicated to guiding
                  individuals through transformative learning and earning
                  experiences, focusing on personal relationship marketing to
                  promote health, income, and friendships. TeamUp Partners is
                  built using React.js with API-based data fetching. The site
                  likely uses RESTful APIs for handling user enrollment and
                  content delivery.
                </p>
                <a href="https://teamuppartners.com/" className="btn btn-primary mt-auto">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={doctor}
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Doctor365</h5>
                <p className="card-text">
                  "Doc-365" is a comprehensive, user-friendly, and interactive
                  platform that provides quick access to online healthcare
                  services. With an easy-to-navigate interface and essential
                  features, the website aims to connect patients with medical
                  professionals, offer medical consultations, and enhance the
                  overall healthcare experience. It offers features for both
                  patients and doctors, streamlining communication, appointment
                  scheduling, and health management.
                </p>
                <a href="https://doctor365.ie/" className="btn btn-primary mt-auto">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
