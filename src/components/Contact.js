import React from "react";
import "../index.css";

function Contact() {
  return (
    <div className="container mx-5 my-3">
      <h1>Get in contact with me!</h1>
      <form id="contact">
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Your Name
          </label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Your information will not be shared with anyone else.
          </div>
        </div>
        <div className="input-group">
          <span className="input-group-text">How can I help you?</span>
          <textarea className="form-control" aria-label="textArea"></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
