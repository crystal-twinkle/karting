import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-white">
            Contact Us
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
