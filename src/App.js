import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="cover-container bg-dark">
        <AboutMe />
        <div className="row g-2" id="projects">
          <ProjectCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
