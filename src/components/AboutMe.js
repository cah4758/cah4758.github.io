import React from "react";
import "../index.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import hero from "../images/hero.png";
import staffPic from "../images/staffPic18.JPG";

const imgStyle = {
  height: "200 px",
  width: "300px",
};

function AboutMe() {
  return (
    <Container id="about-me" className="section">
      <div className="d-flex justify-content-center">
        <Image
          className="col-l-12 d-none d-lg-block"
          src={hero}
          alt="Charles Hernandez photos"
        />
        <Image
          className="d-sm-block d-md-block d-lg-none"
          style={imgStyle}
          src={staffPic}
          alt="Guardians Brass staff 2018"
        />
      </div>
      <div className="p-3 bg-none">
        <h1>Developer | Music Educator | Brass Musician</h1>

        <p>
          Growing up, I was always involved in either a sport or musical
          activity. After a decade of focusing on baseball, I ended up anchoring
          myself in learning how to play the Horn. Despite the fact that I was
          reluctant to try something new, I ended up loving to perform music
          with a wind ensemble (thanks, Mom).
        </p>
        <p>
          Being able to play the Horn has afforded me some amazing opportunities
          and they are memories that I will never forget. A focal point in my
          past has been the amount of traveling I did while performing with the
          Bluecoats (2010) and Boston Crusaders (2011-2012) Drum and Bugle
          Corps. In addition to being a performer with these groups, I was also
          able to serve marching students as an educator with the Guardians Drum
          and Bugle Corps (2016-2018). This experience has been valuable as I
          continue to educate Band students at Moises E. Molina High School in
          Dallas ISD.
        </p>
        <p>
          While teaching during this pandemic, I noticed the lack of learning
          resources that my students could quickly access and I wanted to find a
          way to fix that. With my work as a Developer, I look forward to work
          with a diverse team that embraces the idea of creating access and
          opportunities to clients through the power of the web.
        </p>
      </div>
    </Container>
  );
}

export default AboutMe;
