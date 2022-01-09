import logo from "./logo.svg";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
