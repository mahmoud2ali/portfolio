import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container d-flex justify-content-between align-items-center">
                <a href="#home" className="logo">Mahmoud<span>.</span></a>
                <ul className="nav-links d-flex">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
