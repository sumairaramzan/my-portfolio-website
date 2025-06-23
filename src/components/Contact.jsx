import React from 'react';
import '../App.css';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          📞 Let's Connect
        </h2>
        <div className="row g-4 align-items-stretch">
          {/* Contact Form */}
          <div className="col-lg-6 d-flex" data-aos="fade-right">
            <div className="glass-card p-5 rounded-4 shadow w-100 d-flex flex-column justify-content-between">
              <form>
                <div className="form-floating mb-4">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold shadow-sm mt-auto">
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6 d-flex" data-aos="fade-left">
            <div className="glass-card p-5 rounded-4 shadow w-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fw-bold mb-4">📍 Contact Information</h5>
                <p className="mb-3"><FaMapMarkerAlt className="me-2 text-primary" /> Lahore, Pakistan</p>
                <p className="mb-3"><FaPhoneAlt className="me-2 text-primary" /> +92 3200095628</p>
                <p className="mb-3"><FaEnvelope className="me-2 text-primary" /> sumairaramzan505.com</p>
                <p className="mb-3"><FaGlobe className="me-2 text-primary" /> 
                  <a href="https://sumairaramzan.github.io/my-portfolio-website/" className="text-decoration-none text-dark fw-medium" target="_blank" rel="noopener noreferrer">
                    www.sumaira.com
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <h6 className="fw-semibold">Connect on:</h6>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://linkedin.com/in/sumairaramzan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-primary" />
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-dark" />
                  </a>
                  <a href="https://wa.me/923200095628" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} className="text-success" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Map */}
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: '100%', height: '300px', borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
