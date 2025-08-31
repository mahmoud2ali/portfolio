import React from "react";
import "./about.css";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container d-flex flex-column flex-md-row align-items-center">
                <div className="about-img" data-aos="fade-right">
                    <img src="imgs/about/Mahmoud_Mohamed2.jpg" alt="Profile" />
                </div>
                <div className="about-text ms-md-5 mt-4 mt-md-0" data-aos="fade-left">
                    <h2>About Me</h2>
                    <p>
                        I'm Mahmoud Mohamed, a passionate Full-Stack Developer with expertise in
                        <b> React, Node.js, MongoDB, and JavaScript</b>. I enjoy building
                        responsive, user-friendly applications and continuously learning
                        new technologies to grow as a developer.
                    </p>
                    <a href="#contact" className="btn-primary">Get In Touch</a>
                </div>
            </div>
        </section>
    );
}
