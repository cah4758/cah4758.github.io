import React from "react";
import "../index.css";

function ContactForm() {
  return (
    <>
      <div className="my-5 text-center">
        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Get in contact with me!{" "}
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-secondary">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Me
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="contactEmail" className="col-form-label">
                    Your Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactEmail"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-warning">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
