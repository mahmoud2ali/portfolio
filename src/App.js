import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";



function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1s animations, trigger once
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
