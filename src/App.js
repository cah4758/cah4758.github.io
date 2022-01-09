import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <AboutMe />
        <div className="row g-3" id="projects">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default App;
