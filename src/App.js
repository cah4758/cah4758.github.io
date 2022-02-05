import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <div className="body">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/react-portfolio/" element={<Home />} />
            <Route
              exact
              path="/react-portfolio/projects"
              element={<Projects />}
            />
          </Routes>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
