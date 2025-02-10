import React from 'react';
import '../App.css'; // Import custom CSS for styling

const Experience = () => {
  return (
    <section id="experience" className="experience py-5">
      <div className="container">
        <h4 className="s_border text-center">My Experiences</h4>
        <div className="spacer-half"></div>

        <ul className="d_timeline">
          {/* Experience 1 */}
          <li className="d_timeline-item">
            <h3 className="d_timeline-title">Dec 2024 - Present</h3>
            <p className="d_timeline-text">
              <span className="d_title">Full Stack Developer</span>
              <span className="d_company">UNSI Tech</span>
              As a Full Stack Developer at UNSI Tech, I work on designing and developing end-to-end web applications using the latest technologies like React.js, Node.js, and Laravel. I collaborate closely with cross-functional teams to deliver high-quality software solutions that meet client needs and expectations.
            </p>
          </li>

          {/* Experience 2 */}
          <li className="d_timeline-item">
            <h3 className="d_timeline-title">Oct 2023 - Oct 2024</h3>
            <p className="d_timeline-text">
              <span className="d_title">React.js Developer / Software Engineer</span>
              <span className="d_company">BitsclanITSolutions</span>
              As a React.js Developer at BitsclanITSolutions, I was responsible for building dynamic and responsive user interfaces. My role involved collaborating with designers to ensure a seamless user experience, developing reusable components, and optimizing application performance using React.js and modern frontend development tools.
            </p>
          </li>

          {/* Experience 3 */}
          <li className="d_timeline-item">
            <h3 className="d_timeline-title">Oct 2022 - Oct 2023</h3>
            <p className="d_timeline-text">
              <span className="d_title">Frontend Developer</span>
              <span className="d_company">Software Alliance</span>
              As a Frontend Developer at Software Alliance, I focused on creating intuitive and responsive web applications. My work primarily involved HTML, CSS, JavaScript, and modern frameworks to create interactive, user-friendly websites that adhered to best practices for performance and accessibility.
            </p>
          </li>

          {/* Additional experiences can follow the same structure */}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
