import React from "react";
import "./experience.css";

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        {/* <div className="experience-img" data-aos="fade-right">
          <img src="imgs/experience/work.png" alt="Work Experience" />
        </div> */}
        <div className="experience-text ms-md-5 mt-4 mt-md-0" data-aos="fade-left">
          <h2>Experience</h2>

          <div className="experience-item">
            <h4>Full-Stack Developer Intern</h4>
            <span className="company">DEPI | 2024</span>
            <p>
              Developed responsive web apps using <b>React, Node.js, MongoDB</b>.
              Collaborated in an agile team, implemented REST APIs, and optimized
              database queries for performance.
            </p>
          </div>

          <div className="experience-item">
            <h4>Freelance Web Developer</h4>
            <span className="company">Remote | 2025 - Present</span>
            <p>
              Built custom websites and applications for clients using modern
              frameworks. Focused on delivering clean, scalable, and user-friendly
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
