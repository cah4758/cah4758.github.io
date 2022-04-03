import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../index.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91ao2qo",
        "template_m5d4r97",
        form.current,
        "user_wzX0OsxUtWvJ7TKaqdq8P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="my-5 text-center">
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Get in contact with me!{" "}
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
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
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label
                    type="from_name"
                    htmlFor="from_name"
                    className="col-form-label"
                  >
                    Name:
                  </Form.Label>
                  <Form.Control type="text" name="from_name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="userEmail">
                  <Form.Label htmlFor="reply_to" className="col-form-label">
                    Your Email:
                  </Form.Label>
                  <Form.Control type="text" name="reply_to" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label htmlFor="message" className="col-form-label">
                    Message:
                  </Form.Label>
                  <Form.Control type="text" name="message" />
                </Form.Group>
                <div className="modal-footer">
                  <Button className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </Button>
                  <Button type="submit" className="btn btn-warning">
                    Send message
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
