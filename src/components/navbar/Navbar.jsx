import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#home" className="logo">Mahmoud<span>.</span></a>

        
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "line line1 active" : "line line1"}></span>
          <span className={isOpen ? "line line2 active" : "line line2"}></span>
          <span className={isOpen ? "line line3 active" : "line line3"}></span>
        </div>

        
        <ul className={`nav-links d-flex ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
