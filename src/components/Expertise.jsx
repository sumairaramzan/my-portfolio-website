import React from 'react';
import "../App.css"
import { FaDev, FaFigma, FaLaravel, FaPython, FaReact, FaWordpress } from 'react-icons/fa';

const Expertise = () => {
  return (
    <section id="expertise" className="expertise py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Expertise</h2>
        <div className="row">
          {/* Expertise Item 1 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaReact size={50} className="mb-3" />
              <h5 className="expertise-title">React.js</h5>
              <p className="expertise-description">
                I specialize in creating dynamic and responsive web applications using React.js. I focus on performance optimization, reusable components, and scalable architectures.
              </p>
            </div>
          </div>

          {/* Expertise Item 2 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaLaravel size={50} className="mb-3" />
              <h5 className="expertise-title">Laravel Development</h5>
              <p className="expertise-description">
                Expertise in building robust backend solutions with Laravel. From API integrations to database management, I create secure, high-performance systems.
              </p>
            </div>
          </div>

          {/* Expertise Item 3 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaWordpress size={50} className="mb-3" />
              <h5 className="expertise-title">WordPress Development</h5>
              <p className="expertise-description">
                Extensive experience in creating customized WordPress websites, themes, and plugins. I bring both design and functionality together for a seamless experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Expertise Item 4 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaPython size={50} className="mb-3" />
              <h5 className="expertise-title">Python</h5>
              <p className="expertise-description">
                Experience in building Python-based web applications and automation scripts. I enjoy solving complex problems and building scalable applications.
              </p>
            </div>
          </div>

          {/* Expertise Item 5 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaDev size={50} className="mb-3" />
              <h5 className="expertise-title">DevOps</h5>
              <p className="expertise-description">
                I have worked extensively with cloud technologies, CI/CD pipelines, containerization, and DevOps automation to streamline software development and deployment processes.
              </p>
            </div>
          </div>

          {/* Expertise Item 6 */}
          <div className="col-md-4 mb-4">
            <div className="expertise-card text-center p-4 border rounded">
              <FaFigma size={50} className="mb-3" />
              <h5 className="expertise-title">Figma Design</h5>
              <p className="expertise-description">
                Designing user-friendly UI/UX with Figma. I collaborate with teams to ensure designs are both aesthetically pleasing and functional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
