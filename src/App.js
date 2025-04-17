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
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  {/* TODO:Add Tantum Projects & finalize*/}
  {/* TODO:Add Rachel Buck Project*/}
  const projects = [
    {
      title: "Ministry of Economic Planning - IIS-SSB",
      description: "Integrated Information System for Social Support Benefit (IIS-SSB) system provide a way of facilitating and managing various programs, standardizing, and implementing subsidy processes, providing access to subsidy programs for the poor or targeted segments, improving efficiency and effectiveness through effective coordination of all social assistance programs, and ensuring that services and benefits are provided in a transparent and accountable manner. Therefore, the IIS-SSB solution will be the main enabler for the development of Saudi Arabia's social support and protection system.",
      duration: "January 2025 - Present",
      role: "DevOps Engineer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "IMO - Ministers Communication Platform (MCP)",
      description: "A user-centric platform tailored to streamline external governmental communication by utilizing data analytics and artificial intelligence. Emphasizing data privacy and confidentiality. As well as, providing a single source of truth to facilitate knowledge enrichment and delegation processes among government leadership.",
      duration: "January 2024 - December 2024",
      role: "Software Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "STC Cloud",
      description: "STC Cloud is Saudi Arabia's leading business cloud solution provider. It offers a range of cloud services that are reliable, flexible, and scalable to meet the needs of various businesses. The platform provides local data hosting with advanced Tier IV data centers located in Riyadh and Jeddah. These data centers are built, managed, and operated to ensure a high level of service availability, with a 99.99% uptime guarantee. The services offered by STC Cloud are designed to support businesses by providing them with the necessary cloud features at their own pace, ensuring data safety, security, and operational efficiency.",
      duration: "August 2023 - June 2024",
      role: "Software Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Insurance Authority",
      description: "Collaborated closely with client to understand and fulfill their needs and requirements, implementing fixes, improvements, and updates to the website. Additionally, responsible for deploying these changes on premises to ensure smooth implementation.",
      duration: "January 2024 - February 2024",
      role: "Software Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Unity Dashboard",
      description: "Unity Dashboard is a comprehensive Single Sign-On (SSO) platform designed to streamline internal processes by providing a centralized interface for accessing employee, customer, and account information. The platform enables users to efficiently look up and manage detailed profiles, ensuring quick access to essential data for internal use.",
      duration: "August 2023 - January 2024",
      role: "Software Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Road Segmentation with Deep Learning",
      description: "Built a deep neural network for segmenting roads in satellite images.",
      duration: "Jul 2020 - Jan 2021",
      role: "Software Developer",
      associatedWith: "Mohammed bin Rashed Space Centre",
      logo: mbrscLogo,
    },
    {
      title: "Financial Tracking Mobile Application",
      description: "Used anomaly detection to identify suspicious transactions in real-time.",
      duration: "Nov 2019 - Jun 2020",
      role: "Software Developer",
      associatedWith: "BankTech",
      logo: tantumLogo,
    },
    {
      title: "OutSystems Automation Tool",
      description: "Built an internal automation tool to speed up OutSystems deployments.",
      duration: "Aug 2019 - Oct 2019",
      role: "Software Developer",
      associatedWith: "OutSystems Partner Co.",
      logo: tantumLogo,
    },
    {
      title: "Kubernetes Resource Visualizer",
      description: "Developed a UI for visualizing and managing K8s clusters.",
      duration: "Mar 2019 - Jul 2019",
      role: "Software Developer",
      associatedWith: "DevOps HQ",
      logo: tantumLogo,
    },
    {
      title: "Cybersecurity Threat Dashboard",
      description: "Created a live dashboard to visualize threat levels and alerts.",
      duration: "Dec 2018 - Feb 2019",
      role: "Software Developer",
      associatedWith: "RedShield Security",
      logo: tantumLogo,
    },
    {
      title: "Fitness Tracker App",
      description: "Designed a mobile app to log workouts and track fitness goals.",
      duration: "September 2021 - January 2023",
      role: "Data Analyst",
      associatedWith: "American University of Sharjah",
      logo: ausLogo,
    },
    {
      title: "Confidential",
      description: "Currently developing and launching a tech startup",
      duration: "March 2025 - Present",
      role: "CEO & Founder",
      associatedWith: "Confidental",
    }
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
          {/* TODO: Add speech bubble */}
          <div className="name-container">
            <h1 className="name">Ahmad Bilal</h1>
            <p className="title">Software Engineer & Developer</p>
            <p className="extra-info">
              <span role="img" aria-label="location">📍</span> Riyadh, KSA &nbsp; - &nbsp; Nationality: Irish
              </p>
            {/* TODO: Fix this display on mobile */}
            <div className="socials">
              <p>
                <a href="tel:+966560900600">+966 560 900 600</a> |
                <a href="https://www.linkedin.com/in/ahmadanasbilal" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                <a href="mailto:ahmad.anas.ab@gmail.com"> ahmad.anas.ab@gmail.com</a>  |
                <a  href="./Ahmad_Bilal_CV.pdf" download="Ahmad_Bilal_CV.pdf" rel="noopener noreferrer"> Resume</a>
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
          As a software developer with nearly five years of experience, I bring strong problem-solving abilities, analytical thinking, and a solid foundation in best practices. I'm deeply committed to continuous learning and actively seek out challenges that allow me to grow while delivering solutions that align with stakeholder goals and maintain clear, professional communication. I strive for excellence in every endeavor and am driven by the desire to constantly improve and push my own boundaries.
          </p>
          <br />
          <p>
          My academic and professional journey reflects a strong sense of collaboration and a genuine passion for technology. I'm always eager to connect with like-minded professionals and contribute to impactful projects that drive innovation and create meaningful change.
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
        
        {/* TODO: Add hyper links for actual companies along with working dates & logos*/}
        {/* Experience */}
        <section ref={experienceRef} className={`fade-section ${experienceInView ? "fade-in" : "fade-out"}`}>
          <h2>Experience</h2>
          <ul>
            <li><strong>Software Developer</strong> – Solutions by STC</li>
            <li><strong>AI Engineer</strong> – Mohammed Bin Rashed Space Centre</li>
            <li><strong>Undergraduate Research Assistant (Data Analyst)</strong> – Amereican University of Sharjah</li>
            <li><strong>Junior Software Developer</strong> – Tantum Projects</li>
            <li><strong>Writing Center Tutor</strong> – Amereican University of Sharjah</li>
          </ul>
        </section>

        {/* Skills */}
        <section ref={skillsRef} className={`fade-section ${skillsInView ? "fade-in" : "fade-out"}`}>
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> Python, R, SQL, Java, JavaScript, OutSystems, C#, C++, MATLAB, C</li>
            <li><strong>Data Science:</strong> NLP, Computer Vision, Quantitative Analytics, SAS Enterprise Miner</li>
            <li><strong>Frameworks:</strong> Docker, Kubernetes, React, Django, DRF, Spring Boot, KillBill, Angular</li>
            <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins</li>
            <li><strong>Cloud:</strong> AWS, Azure, Terraform</li>
            <li><strong>APIs:</strong> REST, GraphQL, gRPC </li>
            <li><strong>DBs:</strong> PostgreSQL, MongoDB, Redis, MySQL</li>
            <li><strong>Security:</strong> OWASP, IAM, SSO, OAuth</li>
            <li><strong>Productivity & Consulting Tools:</strong> Git, JIRA, Confluence, Power BI, Tableau</li>
          </ul>
        </section>

        {/* Certifications */}
        <section ref={certificationsRef} className={`fade-section ${certificationsInView ? "fade-in" : "fade-out"}`}>
          <h2>Certifications</h2>
          <ul>
            <li><strong>Certified SAFe 6 Agilist – </strong> Scaled Agile, Inc.</li>
            <li><strong>AI Security & Governance – </strong> Securiti</li>
            <li><strong>Professional Web Developer – </strong> OutSystems</li>
            <li><strong>Web Developer Specialist – </strong> OutSystems</li>
            <li><strong>Architecture Specialist – </strong> OutSystems</li>
            <li><strong>Security Specialist – </strong> OutSystems</li>
            <li><strong>Associate Reactive Developer – </strong> OutSystems</li>
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
      
      {/* TODO: Add role section to indicate what I did on the project*/}
      {/* Projects List */}
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          description={project.description}
          role = {project.role}
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
