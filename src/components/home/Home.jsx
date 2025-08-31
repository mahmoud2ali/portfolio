import "./home.css"
import React from 'react'

export default function Home() {
    return (
        <section className="home d-flex align-items-center" id="home">
            <div className="container text-center">
                <h1 className="hero-title" data-aos="fade-up">
                    Hi, I'm <span>Mahmoud Mohamed</span>
                </h1>
                <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                    Full-Stack Developer
                </h2>
                <p className="hero-text" data-aos="fade-up" data-aos-delay="400">
                    I build modern, responsive web applications with React, Node.js, and MongoDB.
                </p>
                <a href="#projects" className="btn-primary" data-aos="zoom-in" data-aos-delay="600">
                    View My Work
                </a>

            </div>
        </section>
    )
}
