import React from "react";
import "../index.css";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Charles Hernandez
        </a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="/projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="https://drive.google.com/file/d/1gYgcOa7qEBqSoK-IuUTVLz1COQQkH0Gp/view"
                rel="noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="mt-1 d-flex justify-content-around w-25">
            <a
              href="https://github.com/cah4758"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/charlesh4758/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:charlesh4758@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Envelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
