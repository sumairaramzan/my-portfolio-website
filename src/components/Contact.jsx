import React from 'react';
import "../App.css"

const Contact = () => {
  return (
    <section id="contact" className="contact py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <form className='border rounded p-5'>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
