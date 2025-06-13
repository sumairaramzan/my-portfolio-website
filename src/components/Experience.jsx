import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const experiences = [
  {
    icon: '💡',
    date: 'Jan 2024 – Present',
    title: 'MERN Stack Developer',
    company: 'Idevo Solutions',
    description:
      'Working on full-stack apps using React.js, Node.js, Express, MongoDB & MySQL. Collaborating with teams to deliver powerful solutions.',
  },
  {
    icon: '🛠️',
    date: 'Mar 2024 – Dec 2024',
    title: 'React.js Developer / Software Engineer',
    company: 'BitsclanITSolutions',
    description:
      'Built dynamic UIs, worked closely with designers, wrote reusable components, and boosted performance using modern tools.',
  },
  {
    icon: '🎯',
    date: 'Feb 2023 – Jan 2024',
    title: 'Frontend Developer',
    company: 'Software Alliance',
    description:
      'Developed engaging, responsive websites using HTML, CSS, JS. Ensured cross-browser support and high performance.',
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="expertise py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title" data-aos="fade-down">📌 My Experience Timeline</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <h5 className="text-primary">{exp.date}</h5>
                <h4 className="fw-bold">{exp.title}</h4>
                <h6 className="text-secondary mb-2">{exp.company}</h6>
                <p className="text-muted">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
