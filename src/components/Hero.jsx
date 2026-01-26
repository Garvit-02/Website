import React from "react";

export default function Hero() {
  return (
    <section id="home">
      <div className="container hero-content">
        <h1>Garvit Gupta</h1>
        <h3>Backend-Focused Full Stack Developer</h3>
        <p className="tagline">
          MERN Stack | REST APIs | Authentication | Databases
        </p>

        <div className="hero-buttons">
          <a href="/Garvit_Gupta_FS_CV.pdf" className="resume-link" download>Download Resume</a>
          {/* <a
            href="https://github.com/Garvit-02"
            className="btn secondary"
            target="_blank"
          >
            GitHub
          </a> */}
          {/* <a
            href="https://www.linkedin.com/in/garvit-gupta-493995253/"
            className="btn secondary"
            target="_blank"
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </section>
  );
}
