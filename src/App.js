import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Linkbar from "./components/Linkbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <div className="body">
        <Linkbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
