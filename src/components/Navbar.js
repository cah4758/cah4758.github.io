import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Charles Hernandez
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="#about-me">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="https://drive.google.com/file/d/16NtMKHNf1sDPbngWmwnvQjQOq0kWTN4g/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
