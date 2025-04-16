import React, { useEffect } from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";
import ProjectSection from "./ProjectSection";
import stcsLogo from './assets/logos/stcs_logo.jpeg';
import mbrscLogo from './assets/logos/mbrsc_logo.jpeg';
import tantumLogo from './assets/logos/tantum_logo.jpeg';
import ausLogo from './assets/logos/aus_logo.jpeg';
import ProfileFlip from './ProfileFlip';
import ScrollProgressBar from "./ScrollProgressBar";

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const projects = [
    {
      title: "Ministry of Economic Planning - IIS-SSB",
      description: "Integrated Information System for Social Support Benefit (IIS-SSB)...",
      duration: "January 2025 - Present",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "IMO - Ministers Communication Platform (MCP)",
      description: "A user-centric platform tailored to streamline external governmental communication...",
      duration: "January 2024 - December 2024",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "STC Cloud",
      description: "STC Cloud is Saudi Arabia's leading business cloud solution provider...",
      duration: "August 2023 - June 2024",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Insurance Authority",
      description: "Collaborated closely with client to understand and fulfill their needs...",
      duration: "January 2024 - February 2024",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Unity Dashboard",
      description: "Unity Dashboard is a comprehensive Single Sign-On (SSO) platform...",
      duration: "August 2023 - January 2024",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Road Segmentation with Deep Learning",
      description: "Built a deep neural network for segmenting roads in satellite images.",
      duration: "Jul 2020 - Jan 2021",
      associatedWith: "Mohammed bin Rashed Space Centre",
      logo: mbrscLogo,
    },
    {
      title: "Financial Tracking Mobile Application",
      description: "Used anomaly detection to identify suspicious transactions in real-time.",
      duration: "Nov 2019 - Jun 2020",
      associatedWith: "BankTech",
      logo: tantumLogo,
    },
    {
      title: "OutSystems Automation Tool",
      description: "Built an internal automation tool to speed up OutSystems deployments.",
      duration: "Aug 2019 - Oct 2019",
      associatedWith: "OutSystems Partner Co.",
      logo: tantumLogo,
    },
    {
      title: "Kubernetes Resource Visualizer",
      description: "Developed a UI for visualizing and managing K8s clusters.",
      duration: "Mar 2019 - Jul 2019",
      associatedWith: "DevOps HQ",
      logo: tantumLogo,
    },
    {
      title: "Cybersecurity Threat Dashboard",
      description: "Created a live dashboard to visualize threat levels and alerts.",
      duration: "Dec 2018 - Feb 2019",
      associatedWith: "RedShield Security",
      logo: tantumLogo,
    },
    {
      title: "Fitness Tracker App",
      description: "Designed a mobile app to log workouts and track fitness goals.",
      duration: "Jul 2018 - Nov 2018",
      associatedWith: "FitWave",
      logo: ausLogo,
    },
  ];

  useEffect(() => {
    const shapes = document.querySelectorAll(".background-shape");
    shapes.forEach((shape) => {
      if (!shape.dataset.xFactor) {
        shape.dataset.xFactor = (Math.random() - 0.5).toFixed(2);
        shape.dataset.yFactor = (Math.random() - 0.5).toFixed(2);
      }
    });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          shapes.forEach((shape) => {
            const xFactor = parseFloat(shape.dataset.xFactor);
            const yFactor = parseFloat(shape.dataset.yFactor);
            shape.style.transform = `translate(${-scrollY * xFactor}px, ${-scrollY * yFactor}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <ScrollProgressBar />

      {/* Background Shapes */}
      <div className="background-shapes">
        {[
          "5%", "10%", "12%", "27%", "28%", "35%", "42%", "50%", "58%", "65%", 
          "72%", "80%", "87%", "93%", "100%", "108%", "115%", "125%"
        ].map((top, idx) => (
          <div
            key={`star-${idx}`}
            className="background-shape star"
            style={{ top, left: idx % 2 === 0 ? "5%" : "90%" }}
          />
        ))}
      </div>

      <div className="background-shapes">
        {[
          "5%", "10%", "12%", "27%", "28%", "35%", "42%", "50%", "58%", "65%",
          "72%", "80%", "87%", "93%", "100%", "108%", "115%", "125%"
        ].map((top, idx) => (
          <div
            key={`diamond-${idx}`}
            className="background-shape diamond"
            style={{ top, left: idx % 2 === 0 ? "5%" : "90%" }}
          />
        ))}
      </div>

      {/* Easter Egg */}
      <a href="#" className="easter-egg-link">Congrats you found the easter egg!</a>

      {/* Header */}
      <header className="App-header">
        <div className="profile-container">
          <ProfileFlip />
          <div className="name-container">
            <h1 className="name">Ahmad Bilal</h1>
            <p className="title">Software Engineer & Developer</p>
            <div className="socials">
              <p>
                <a href="tel:+966560900600">+966 560 900 600</a> |
                <a href="https://www.linkedin.com/in/ahmadanasbilal" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                <a href="mailto:ahmad.anas.ab@gmail.com">ahmad.anas.ab@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="content-container">
        {/* About Me */}
        <section ref={aboutRef} className={`fade-section ${aboutInView ? "fade-in" : "fade-out"}`}>
          <h2>About Me</h2>
          <p>
            As a software developer, I excel in problem-solving, analytical thinking, and implementing best practices...
          </p>
          <br />
          <p>
            My work and academic experiences highlight strong teamwork and a passion for technology...
          </p>
        </section>

        {/* Education */}
        <section ref={educationRef} className={`fade-section ${educationInView ? "fade-in" : "fade-out"}`}>
          <h2>Education</h2>
          <ul>
            <li><strong>Harvard Business School</strong> – Data Science for Business (Nov 2024 - Jan 2025)</li>
            <li><strong>American University of Sharjah</strong> – BSc in Computer Science (Sep 2018 - Jan 2023)</li>
          </ul>
        </section>

        {/* Experience */}
        <section ref={experienceRef} className={`fade-section ${experienceInView ? "fade-in" : "fade-out"}`}>
          <h2>Experience</h2>
          <ul>
            <li><strong>Software Developer</strong> – Solutions by STC</li>
            <li><strong>AI Engineer</strong> – Mohammed Bin Rashed Space Centre</li>
            <li><strong>Research Assistant (Data Analyst)</strong> – AUS</li>
            <li><strong>Writing Center Tutor</strong> – AUS</li>
            <li><strong>Junior Software Developer</strong> – Tantum Projects</li>
          </ul>
        </section>

        {/* Skills */}
        <section ref={skillsRef} className={`fade-section ${skillsInView ? "fade-in" : "fade-out"}`}>
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> Python, JavaScript, C++, etc.</li>
            <li><strong>Data Science:</strong> NLP, CV, SAS Miner</li>
            <li><strong>Frameworks:</strong> React, Django, Spring Boot</li>
            <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins</li>
            <li><strong>Cloud:</strong> AWS, Azure, Terraform</li>
            <li><strong>APIs:</strong> REST, GraphQL, gRPC</li>
            <li><strong>DBs:</strong> PostgreSQL, MongoDB, Redis</li>
            <li><strong>Security:</strong> OWASP, IAM, SSO</li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="fade-section">
          <h2>Certifications</h2>
          <ul>
            <li>Certified SAFe 6 Agilist</li>
            <li>AI Security & Governance – Securiti</li>
            <li>Professional Web Developer – OutSystems</li>
            <li>Security & Architecture Specialist – OutSystems</li>
            <li>Associate Reactive Developer – OutSystems</li>
          </ul>
        </section>

        {/* Projects Title */}
        <h3>
          Projects
          <span className="arrow-container">
            <span className="arrow arrow-left"></span>
            <span className="arrow arrow-right"></span>
          </span>
        </h3>
      </div>

      {/* Projects List */}
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          description={project.description}
          duration={project.duration}
          company={project.associatedWith}
          logo={project.logo}
        />
      ))}

      {/* Footer */}
      <footer>
        <p><strong>Contact</strong></p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/ahmadanasbilal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="tel:+966560900600">+966 560 900 600</a>
          <a href="mailto:ahmad.anas.ab@gmail.com">ahmad.anas.ab@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
