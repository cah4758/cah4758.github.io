import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <div className="cover-container bg-dark">
        <AboutMe />
        <div className="row g-2" id="projects">
          <ProjectCard />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
