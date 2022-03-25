import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../index.css";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

function Linkbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container className="bg-dark">
          <Navbar.Brand as={Link} to="/">
            Charles Hernandez
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar" className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <NavDropdown title="Resume">
                <NavDropdown.Item
                  target="_blank"
                  rel="noreferrer"
                  href="https://bit.ly/cah4758"
                >
                  Download
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link
                className="mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cah4758"
              >
                <Github size={20} />
              </Nav.Link>
              <Nav.Link
                className="mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/charlesh4758/"
              >
                <Linkedin size={20} />
              </Nav.Link>
              <Nav.Link
                className="mx-2"
                target="_blank"
                rel="noreferrer"
                href="mailto:charlesh4758@gmail.com"
              >
                <Envelope size={20} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Linkbar;
