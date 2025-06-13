import React, { useEffect } from "react";
import remotepad from "../assets/images/remotepad.png";
import teamup from "../assets/images/teamup.png";
import doctor from "../assets/images/doctor365.png";
import centrix from "../assets/images/done.jpg";
import abckiddy from "../assets/images/sss.jpg";
import AOS from "aos";
import "aos/dist/aos.css";



const items = [
  {
    img: remotepad,
    title: "TheRemotePad",
    desc: "Platform to connect companies with top-tier remote software developers, enabling efficient project development regardless of location.",
    link: "https://theremotepad.com/",
  },
  {
    img: teamup,
    title: "TeamUpPartner",
    desc: "React‑based platform with RESTful API integration for guiding individuals through learning & earning experiences.",
    link: "https://teamuppartners.com/",
  },
  {
    img: doctor,
    title: "Doctor365",
    desc: "Healthcare platform facilitating patient‑doctor communication, appointment scheduling & consultations in an intuitive UI.",
    link: "https://doc-365.unsi.tech/",
  },
  {
    img: centrix,
    title: "CentrixHub AI",
    desc: "AI‑powered SaaS integrating CRM, lead management, proposals, document collaboration and team‑client engagement.",
    link: "https://www.dev.centrixhub.ai/",
  },
  {
    img: abckiddy,
    title: "ABC Kiddy",
    desc: "Children’s platform built with React, Vite & Tailwind for alphabet learning, tracing & phonics exercises.",
    link: "https://abc-project-main-git-main-sumairaramzans-projects.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => { AOS.init(); }, []);
  return (
    <section id="projects" className="projects py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">🚀 My Projects</h2>
        <div className="row g-4">
          {items.map((p, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="fade-up" data-aos={idx % 2 === 0 ? "zoom-in" : "flip-left"} data-aos-delay={idx * 100}>
              <div className="project-card shadow-sm rounded-4 overflow-hidden h-100">
                <div className="project-img-container">
                  <img src={p.img} alt={p.title} className="img-fluid project-img" />
                </div>
                <div className="p-4 d-flex flex-column">
                  <h5 className="fw-semibold mb-2">{p.title}</h5>
                  <p className="text-muted small flex-grow-1">{p.desc}</p>
                  <a
                    href={p.link}
                    className="btn btn-outline-primary mt-3 w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .project-img-container {
          max-height: 200px;
          overflow: hidden;
        }
        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Projects;
