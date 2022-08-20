import React from "react";
import "../index.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Resume() {
  return (
    <Container className="section" id="resume">
      <h1>Résumé</h1>
      <div className="left-div">
        <Card className="bg-red">
          <Card.Title>Work Experience</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card>
      </div>
      <div className="right-div">
        <Card>
          <Card.Title>Education Experience</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card>
      </div>
    </Container>
  );
}

export default Resume;
