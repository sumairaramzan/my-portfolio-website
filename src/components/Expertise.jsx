import React, { useEffect } from 'react';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaLaravel, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase, FaKey, FaExchangeAlt
} from 'react-icons/fa';

import {
  SiNextdotjs, SiJavascript, SiRedux, SiTailwindcss, SiMui, SiPhp,
  SiExpress, SiMysql, SiMailchimp, SiJsonwebtokens
} from 'react-icons/si';

const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const sections = [
    {
      title: "Frontend Development",
      skills: [
        { icon: <FaHtml5 />, title: "HTML5", color: "text-danger" },
        { icon: <FaCss3Alt />, title: "CSS3", color: "text-primary" },
        { icon: <SiJavascript />, title: "JavaScript", color: "text-warning" },
        { icon: <FaBootstrap />, title: "Bootstrap", color: "text-purple" },
        { icon: <SiTailwindcss />, title: "Tailwind CSS", color: "text-info" },
        { icon: <FaSass />, title: "SASS / SCSS", color: "text-pink" },
        { icon: <SiMui />, title: "Material UI", color: "text-info" },
        { icon: <FaReact />, title: "React.js", color: "text-cyan" },
        { icon: <SiNextdotjs />, title: "Next.js", color: "text-dark" },
        { icon: <SiRedux />, title: "Redux Toolkit", color: "text-purple-700" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { icon: <FaLaravel />, title: "Laravel", color: "text-danger" },
        { icon: <SiPhp />, title: "Core PHP", color: "text-primary" },
        { icon: <FaNodeJs />, title: "Node.js", color: "text-success" },
        { icon: <SiExpress />, title: "Express.js", color: "text-dark" },
      ]
    },
    {
      title: "APIs & Integrations",
      skills: [
        { icon: <SiJsonwebtokens />, title: "JWT Auth", color: "text-warning" },
        { icon: <FaKey />, title: "OAuth", color: "text-primary" },
        { icon: <FaExchangeAlt />, title: "WebSocket", color: "text-info" },
        { icon: <SiMailchimp />, title: "Mailchimp", color: "text-danger" },
      ]
    },
    {
      title: "Version Control & Tools",
      skills: [
        { icon: <FaGitAlt />, title: "Git", color: "text-orange" },
        { icon: <FaGithub />, title: "GitHub", color: "text-dark" },
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: <FaDatabase />, title: "MySQL", color: "text-secondary" },
      ]
    }
  ];

  return (
    <section  className="expertise py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">My Expertise</h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-5">
            <h4 className="mb-4">{section.title}</h4>
            <div className="row justify-content-center">
              {section.skills.map((item, i) => (
                <div
                  key={i}
                  className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-4"
                  data-aos="zoom-in"
                >
                  <div
                    className={`skill-icon ${item.color}`}
                    id='expertise'
                    style={{
                      fontSize: "2.5rem",
                      transition: "transform 0.3s",
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="mt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
