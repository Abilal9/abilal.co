import React, { useEffect } from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";
import ProjectSection from "./ProjectSection";
import profilePic from "./assets/profile_pic.jpg";

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const projects = [
    {
      title: "Smart City Traffic Analyzer",
      description: "Built a system to monitor traffic and congestion levels using real-time video feeds.",
      duration: "Jan 2022 - Sep 2022",
      associatedWith: "Solutions by STC",
      logo: "/logos/stc.png",
    },
    {
      title: "Healthcare Chatbot Assistant",
      description: "Developed an AI-powered chatbot to assist patients with appointment scheduling and FAQs.",
      duration: "Oct 2021 - Dec 2021",
      associatedWith: "Cura Health",
      logo: "/logos/cura.png",
    },
    {
      title: "E-commerce Recommendation Engine",
      description: "Created a machine learning engine to recommend products based on user behavior.",
      duration: "May 2021 - Sep 2021",
      associatedWith: "Noon",
      logo: "/logos/noon.png",
    },
    {
      title: "Autonomous Drone Navigation",
      description: "Implemented pathfinding algorithms for drones in GPS-denied environments.",
      duration: "Feb 2021 - Apr 2021",
      associatedWith: "STC Drone Lab",
      logo: "/logos/drone-lab.png",
    },
    {
      title: "Road Segmentation with Deep Learning",
      description: "Built a deep neural network for segmenting roads in satellite images.",
      duration: "Jul 2020 - Jan 2021",
      associatedWith: "Space Center AI Lab",
      logo: "/logos/space-center.png",
    },
    {
      title: "Financial Fraud Detection",
      description: "Used anomaly detection to identify suspicious transactions in real-time.",
      duration: "Nov 2019 - Jun 2020",
      associatedWith: "BankTech",
      logo: "/logos/banktech.png",
    },
    {
      title: "OutSystems Automation Tool",
      description: "Built an internal automation tool to speed up OutSystems deployments.",
      duration: "Aug 2019 - Oct 2019",
      associatedWith: "OutSystems Partner Co.",
      logo: "/logos/outsystems.png",
    },
    {
      title: "Kubernetes Resource Visualizer",
      description: "Developed a UI for visualizing and managing K8s clusters.",
      duration: "Mar 2019 - Jul 2019",
      associatedWith: "DevOps HQ",
      logo: "/logos/devops-hq.png",
    },
    {
      title: "Cybersecurity Threat Dashboard",
      description: "Created a live dashboard to visualize threat levels and alerts.",
      duration: "Dec 2018 - Feb 2019",
      associatedWith: "RedShield Security",
      logo: "/logos/redshield.png",
    },
    {
      title: "Fitness Tracker App",
      description: "Designed a mobile app to log workouts and track fitness goals.",
      duration: "Jul 2018 - Nov 2018",
      associatedWith: "FitWave",
      logo: "/logos/fitwave.png",
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
            shape.style.transform = `translate(${ -scrollY * xFactor }px, ${ -scrollY * yFactor }px)`;
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
      <div className="background-shapes">
        <div className="background-shape star" style={{ top: "5%", left: "5%" }}></div>
        <div className="background-shape star" style={{ top: "10%", left: "90%" }}></div>
        <div className="background-shape star" style={{ top: "15%", left: "12%" }}></div>
        <div className="background-shape star" style={{ top: "20%", left: "85%" }}></div>
        <div className="background-shape star" style={{ top: "28%", left: "8%" }}></div>
        <div className="background-shape star" style={{ top: "35%", left: "92%" }}></div>
        <div className="background-shape star" style={{ top: "42%", left: "10%" }}></div>
        <div className="background-shape star" style={{ top: "50%", left: "88%" }}></div>
        <div className="background-shape star" style={{ top: "58%", left: "6%" }}></div>
        <div className="background-shape star" style={{ top: "65%", left: "93%" }}></div>
        <div className="background-shape star" style={{ top: "72%", left: "15%" }}></div>
        <div className="background-shape star" style={{ top: "80%", left: "85%" }}></div>
        <div className="background-shape star" style={{ top: "87%", left: "8%" }}></div>
        <div className="background-shape star" style={{ top: "93%", left: "90%" }}></div>
        <div className="background-shape star" style={{ top: "100%", left: "5%" }}></div>
        <div className="background-shape star" style={{ top: "108%", left: "92%" }}></div>
        <div className="background-shape star" style={{ top: "115%", left: "12%" }}></div>
        <div className="background-shape star" style={{ top: "125%", left: "88%" }}></div>
      </div>

      <a href="#" className="easter-egg-link">Congrats you found the easter egg!</a>
      
      <header className="App-header">
        <div className="profile-container">
          <img src={profilePic} alt="Profile" className="profile-img" />
          <div className="name-container">
            <h1 className="name">Ahmad Bilal</h1>
            <p className="title">Software Engineer & Developer</p>
            <div className="socials">
              <p>
                <a href="https://www.linkedin.com/in/ahmadanasbilal" target="_blank" rel="noopener noreferrer"> LinkedIn </a> | 
                <a href="https://github.com/abilal9" target="_blank" rel="noopener noreferrer"> GitHub </a> | 
                <a href="tel:+966560900600"> +966 560 900 600 </a> | 
                <a href="mailto:ahmad.anas.ab@gmail.com"> ahmad.anas.ab@gmail.com </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* About Me Section */}
        <section ref={aboutRef} className={`fade-section ${aboutInView ? "fade-in" : "fade-out"}`}>
          <h2>About Me</h2>
          <p>
            As a software developer, I excel in problem-solving, analytical thinking, and implementing best practices. Committed to continuous learning, I consistently seek new challenges to apply my technical expertise while meeting stakeholder needs and maintaining professional communication.
          </p>
          <br />
          <p>
            My work and academic experiences highlight strong teamwork and a passion for technology. I look forward to connecting with professionals and contributing to projects that make a positive impact.
          </p>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className={`fade-section ${educationInView ? "fade-in" : "fade-out"}`}>
          <h2>Education</h2>
          <ul>
            <li><strong>Harvard Business School</strong> - Data Science for Business (November 2024 - January 2025)</li>
            <li><strong>American University of Sharjah</strong> - Bachelor of Science in Computer Science (September 2018 - January 2023)</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className={`fade-section ${experienceInView ? "fade-in" : "fade-out"}`}>
          <h2>Experience</h2>
          <ul>
            <li><strong>Software Developer</strong> - Solutions by STC</li>
            <li><strong>AI Engineer</strong> - Mohammed Bin Rashed Space Centre</li>
            <li><strong>Undergraduate Research Assistant (Data Analyst)</strong> - American University of Sharjah</li>
            <li><strong>Writing Center Tutor</strong> - American University of Sharjah</li>
            <li><strong>Junior Software Developer</strong> - Tantum Projects</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className={`fade-section ${skillsInView ? "fade-in" : "fade-out"}`}>
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> Python, R, SQL, Java, JavaScript, OutSystems, C#, C++, MATLAB, C</li>
            <li><strong>Data Science & Analysis:</strong> NLP, Computer Vision, Quantitative Analytics, SAS Enterprise Miner</li>
            <li><strong>Development & Frameworks:</strong> Docker, Kubernetes, React, Django, DRF, Spring Boot, KillBill, Angular</li>
            <li><strong>Cloud & DevOps:</strong> AWS, Azure, Terraform, CI/CD (Jenkins, GitHub Actions)</li>
            <li><strong>APIs & Integration:</strong> REST, GraphQL, SOAP, gRPC, API Gateway</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
            <li><strong>Productivity & Consulting Tools:</strong> Git, JIRA, Confluence, Power BI, Tableau</li>
            <li><strong>Security:</strong> OWASP, IAM, SSO, OAuth</li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="fade-section">
          <h2>Certifications</h2>
          <ul>
            <li>Certified SAFe 6 Agilist – Scaled Agile, Inc.</li>
            <li>AI Security & Governance – Securiti</li>
            <li>Professional Web Developer – OutSystems</li>
            <li>Web Developer Specialist – OutSystems</li>
            <li>Architecture Specialist – OutSystems</li>
            <li>Security Specialist – OutSystems</li>
            <li>Associate Reactive Developer – OutSystems</li>
          </ul>
        </section>
      </div>

      {/* Projects Section */}
      {projects.map((project, index) => (
  <ProjectSection
    key={index}
    title={project.title}
    description={project.description}
    duration={project.duration}
    associatedWith={project.associatedWith}
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
