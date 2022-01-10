import React from "react";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import "../index.css";

function Footer() {
  return (
    <footer className="footer text-center mt-auto py-3 bg-dark">
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
    </footer>
  );
}

export default Footer;
