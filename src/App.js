import React from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";
import ProjectSection from "./ProjectSection"; // Adjust the path as needed

function App() {
  // Main sections useInView hooks
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // List of 10 projects
  const projects = Array.from({ length: 10 }, (_, index) => ({
    title: `Project Example ${index + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name">Ahmad Bilal</h1>
        <p className="title">Software Engineer & Developer</p>
      </header>

      <section
        ref={aboutRef}
        className={`fade-section ${aboutInView ? "fade-in" : "fade-out"}`}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with expertise in full-stack
          development and a focus on React, Python, Kubernetes, Docker, and
          more.
        </p>
      </section>

      <section
        ref={skillsRef}
        className={`fade-section ${skillsInView ? "fade-in" : "fade-out"}`}
      >
        <h2>Skills</h2>
        <ul>
          <li>React & Redux</li>
          <li>Node.js & Express</li>
          <li>Docker & Kubernetes</li>
          <li>Python (Flask, Django)</li>
          <li>CI/CD, Jenkins, Git</li>
        </ul>
      </section>

      <section
        ref={experienceRef}
        className={`fade-section ${experienceInView ? "fade-in" : "fade-out"}`}
      >
        <h2>Experience</h2>
        <ul>
          <li>AI Engineer Intern at Big Space Center</li>
          <li>Software Engineer at TechCorp</li>
        </ul>
      </section>

      {/* Use the ProjectSection component for each project */}
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}

      <footer>
        <p>Contact</p>
        <p>Email: ahmad.anas.ab@gmail.com</p>
        <p>Number: +966 560 900 600</p>
        <p>
          <a
            href="https://www.linkedin.com/in/ahmadanasbilal"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
