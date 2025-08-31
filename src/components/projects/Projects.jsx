import React from "react";
import "./projects.css";
const projects = [
  {
    title: "EchoVerse",
    desc: "A full-stack blog application with user authentication and CRUD features.",
    img: "/imgs/projects/1.png",
    link: "https://github.com/mahmoud2ali/Blog-WebSite"
  },
  {
    title: "Eventure",
    desc: "An event management system with booking, authentication, and an admin panel.",
    img: "/imgs/projects/2.png",
    link: "https://event-booking-system-liard.vercel.app/"
  },
  {
    title: "Book Hub",
    desc: "A digital library application where users can browse, manage, and save favorite books.",
    img: "/imgs/projects/3.png",
    link: "https://github.com/mahmoud2ali/BooksApp"
  }

];


export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container text-center">
        <h2>Projects</h2>
        <div className="row mt-4">
          {projects.map((proj, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="project-card" data-aos="flip-up" data-aos-delay="200 * i">
                <img src={process.env.PUBLIC_URL + proj.img} alt={proj.title} />
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.link} className="btn-primary">View</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
