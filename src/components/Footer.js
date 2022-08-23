import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import "../index.css";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom">
      <div className="container d-flex justify-content-evenly bg-dark">
        <a href="https://github.com/cah4758" target="_blank" rel="noreferrer">
          <Github size={30} />
        </a>

        <a
          href="https://www.linkedin.com/in/charlesh4758/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="mailto:charlesh4758@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Envelope size={30} />
        </a>
      </div>
    </Navbar>
  );
}

export default Footer;
