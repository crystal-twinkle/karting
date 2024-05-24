import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <div className=" text-white">
          Contact Us
        </div>

        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your text</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
