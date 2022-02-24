import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../index.css";
import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

function Linkbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
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
              <Nav.Link
                as={Link}
                to="https://drive.google.com/file/d/1gYgcOa7qEBqSoK-IuUTVLz1COQQkH0Gp/view"
              >
                Resume
              </Nav.Link>
            </Nav>
            <Nav className="flex-row">
              <Nav.Link
                as={Link}
                className="mx-2"
                to="https://github.com/cah4758"
              >
                <Github size={20} />
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="mx-2"
                to="https://www.linkedin.com/in/charlesh4758/"
              >
                <Linkedin size={20} />
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="mx-2"
                to="mailto:charlesh4758@gmail.com"
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