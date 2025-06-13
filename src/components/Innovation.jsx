import React, { useState } from 'react';
import '../App.css';

import defaultImg from '../assets/images/default.jpg';
import laravelImg from '../assets/images/laravel.jpg';
import reactImg from '../assets/images/reactJS.jpg';
import figmaImg from '../assets/images/figma.jpg';

const skills = [
  { name: 'Laravel Development', key: 'laravel' },
  { name: 'ReactJS', key: 'reactJS' },
  { name: 'Figma', key: 'figma' },
];

const Innovation = () => {
  const [hoveredStack, setHoveredStack] = useState('');

  const imageMap = {
    laravel: laravelImg,
    reactJS: reactImg,
    figma: figmaImg,
  };

  const imageSrc = hoveredStack ? imageMap[hoveredStack] : defaultImg;

  return (
    <section id="what-i-do" className="py-5 bg-light">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">💡 What I Do</h2>
            <p className="text-muted mb-4">
              Where Innovation Meets Execution — every interaction unveils a unique solution.
            </p>
            <p>
              I'm not just a developer; I’m a problem-solver and your tech collaborator. Together, we transform concepts into meaningful digital experiences.
            </p>

            <div className="row mt-4">
              {skills.map((skill) => (
                <div
                  key={skill.key}
                  className="col-12 mb-3"
                  onMouseEnter={() => setHoveredStack(skill.key)}
                  onMouseLeave={() => setHoveredStack('')}
                >
                  <div className="card shadow-sm border-0 hover-shadow h-100 p-3">
                    <h5 className="mb-0">{skill.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <div className="img-preview rounded-4 overflow-hidden shadow-sm">
              <img
                src={imageSrc}
                alt={hoveredStack || 'default'}
                className="img-fluid preview-img"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        .img-preview {
          max-height: 350px;
          width: 100%;
        }
        .preview-img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          transition: transform 0.3s ease;
        }
        .img-preview:hover .preview-img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default Innovation;
