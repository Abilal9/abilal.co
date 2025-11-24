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
import ParentComponent from "./ParentComponent";
import MapWidget from "./MapWidget";
import BackToTop from "./BackToTop";

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const projects = [
    {
      title: "SERA E-Services Portal",
      description: "The SERA E-Services Platform delivers a centralized digital hub for managing complaints, licensing requests, and customer interactions within Saudi Arabia's electricity sector. The system standardizes service workflows, improves processing efficiency, and ensures transparent, reliable service delivery aligned with national digital government standards.",
      duration: "November 2025 - Present",
      role: "Lead Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "SDAIA Dashboard - Reporting & Visualization Platform",
      description: "Developed a secure, self-hosted reporting platform for SDAIA's Government Web Services dashboards, enabling real-time data integration, drag-and-drop report design, and customizable multi-page layouts. The solution supports automated PDF, Excel, and CSV exports, scheduled delivery via secure channels, and full branding customization with headers, footers, and watermarks. Implemented role-based access controls and encryption to ensure compliance with government security standards, streamlining the reporting process and improving information sharing across departments.",
      duration: "July 2025 - November 2025",
      role: "Lead Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Human Resource Development Fund - Unified Data Environment",
      description: "This project aims to design and implement a Unified Data Environment (UDE) that consolidates data sources across the organization into a single, coherent infrastructure. The goal is to enable seamless data integration, management, accessibility, and analysis by breaking down data silos and establishing a centralized platform for both operational and analytical needs.",
      duration: "May 2025 - October 2025",
      role: "Technical Lead",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "General Authority for Military Industries - GAMI Task Force",
      description: "The GAMI Task Force Communication Portal is a dedicated initiative by the General Authority for Military Industries (GAMI) to streamline communication, coordination, and collaboration among various internal teams and external partners involved in military industry development.",
      duration: "March 2025 - September 2025",
      role: "Lead Developer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "Ministry of Economic Planning – IIS-SSB",
      description: "Integrated Information System for Social Support Benefit (IIS-SSB) system provide a way of facilitating and managing various programs, standardizing, and implementing subsidy processes, providing access to subsidy programs for the poor or targeted segments, improving efficiency and effectiveness through effective coordination of all social assistance programs, and ensuring that services and benefits are provided in a transparent and accountable manner. Therefore, the IIS-SSB solution will be the main enabler for the development of Saudi Arabia's social support and protection system.",
      duration: "January 2025 - August 2025",
      role: "DevOps Engineer",
      associatedWith: "Solutions by STC",
      logo: stcsLogo,
    },
    {
      title: "IMO – Ministers Communication Platform (MCP)",
      description: "A user-centric platform for the Initiatives and Missions Affairs Office (IMO) tailored to streamline external governmental communication by utilizing data analytics and artificial intelligence. Emphasizing data privacy and confidentiality. As well as, providing a single source of truth to facilitate knowledge enrichment and delegation processes among government leadership.",
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
      description: "This project developed a Deep Neural Network for road extraction in collaboration with MBRSC engineers, leveraging variations of the U-Net architecture. A novel dataset was created using high-resolution satellite images of the UAE from KhalifaSat, with a 300% data augmentation for improved training, validation, and testing. Three models were compared, all achieving over 98% accuracy. The project provided actionable AI insights for urban planning optimization and facilitated data-driven decision-making by aligning technical and business strategies.",
      duration: "Jul 2020 - Jan 2021",
      role: "Software Developer",
      associatedWith: "Mohammed bin Rashed Space Centre",
      logo: mbrscLogo,
    },
    {
      title: "HabitSync – Productivity Mobile App",
      description: "Created a cross-platform mobile productivity and habit-tracking app using React Native and Firebase (Firestore, Auth, Cloud Functions). Features included real-time syncing, custom habit reminders, analytics, and a clean user interface with dark mode support. Integrated Google/Apple sign-in, Redux for state management, and deployed via Expo EAS with CI/CD pipelines and web support through Firebase Hosting.",
      duration: "Nov 2019 - Jun 2020",
      role: "Software Developer",
      associatedWith: "Tantum Projects",
      logo: tantumLogo,
    },
    {
      title: "CI/CD Monitoring Dashboard",
      description: "Built a DevOps monitoring tool for continuous integration and delivery pipelines using Python (FastAPI) and Vue.js. Aggregated logs and build events from Jenkins, GitHub Actions, and GitLab. Integrated with Prometheus, Grafana, Jira, and Slack for full visibility and alerting. Automated deployment with Terraform and Ansible on Azure Cloud, providing seamless observability and incident tracking across development pipelines.",
      duration: "Aug 2019 - Oct 2019",
      role: "Software Developer",
      associatedWith: "Tantum Projects",
      logo: tantumLogo,
    },
    {
      title: "Cloud-Native Incident Management System",
      description: "Developed a full-stack, cloud-native incident management platform enabling IT teams to monitor, log, and respond to infrastructure issues in real time. Utilized Node.js and Express for the backend, Kafka for log streaming, and MongoDB for storage. Deployed using Docker and Kubernetes on Google Cloud (GKE) and integrated with Slack and email APIs for alerting. Included real-time dashboards and analytics to support efficient team coordination.",
      duration: "Mar 2019 - Jul 2019",
      role: "Software Developer",
      associatedWith: "Tantum Projects",
      logo: tantumLogo,
    },
    {
      title: "Productivity Portal for Workflow Optimization",
      description: "Developed a full-stack productivity tool tailored to a client’s workflow using React, Django REST Framework, and PostgreSQL. Deployed via Docker and Kubernetes on AWS (EC2, S3, RDS) with CI/CD pipelines using Jenkins and GitHub Actions. Included secure authentication, role-based access, WebSockets for real-time updates, and built-in analytics to enhance collaboration, transparency, and efficiency.",
      duration: "Dec 2018 - Feb 2019",
      role: "Software Developer",
      associatedWith: "Tantum Projects",
      logo: tantumLogo,
    },
    {
      title: "Code-Switching Analysis in Multilingual Student Communication",
      description: "Conducted a data-driven analysis of code-switching behavior among multilingual students, focusing on frequency, context, and triggers of language switching during communication. Responsible for collecting, cleaning, and structuring raw linguistic data, followed by applying statistical and data science techniques to uncover meaningful patterns and correlations. The project aimed to provide insights into when and why students switch languages, contributing to a deeper understanding of multilingual interaction dynamics in academic settings.",
      duration: "September 2021 - January 2023",
      role: "Data Analyst",
      associatedWith: "American University of Sharjah",
      logo: ausLogo,
    },
    {
      title: "Writing Center Tutoring",
      description: "Completed specialized training to become a certified writing tutor, mastering academic and professional writing standards. Assisted students at various academic levels, from freshmen to PhD candidates, in improving their writing skills for academic papers, theses, and professional documents. Provided personalized feedback on grammar, structure, style, and tone to enhance clarity and effectiveness. Collaborated with faculty to develop writing resources and promote best practices. Managed the Writing Center website, overseeing session bookings and ensuring smooth operations, while also resolving IT issues and maintaining technical infrastructure for tutoring and scheduling.",
      duration: "September 2020 - January 2023",
      role: "Professional Writing Tutor / IT Coordinator",
      associatedWith: "American University of Sharjah",
      logo: ausLogo,
    },
    {
      title: "Confidential Project",
      description: "Currently developing and launching a tech startup",
      duration: "March 2025 - Present",
      role: "CEO & Founder",
      associatedWith: "Confidential",
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
      <BackToTop />

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
        <ParentComponent />
          <div className="name-container">
            <h1 className="name">Ahmad Bilal</h1>
            <p className="title">Software Engineer & Developer</p>
            <p className="extra-info">
              <span role="img" aria-label="location">📍</span> Riyadh, KSA &nbsp; - &nbsp; Nationality: Irish
              </p>
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
            <li>  
              <a
              href="https://www.hbs.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight">
                <strong>Harvard Business School</strong> – Data Science for Business (Nov 2024 - Jan 2025)
              </a>
            </li>
            <li>  
              <a
              href="https://www.aus.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight">
                <strong>American University of Sharjah</strong> – BSc in Computer Science (Sep 2018 - Jan 2023)
              </a>
            </li>
          </ul>
        </section>
        
        {/* Experience */}
        <section ref={experienceRef} className={`fade-section ${experienceInView ? "fade-in" : "fade-out"}`}>
          <h2>Experience</h2>
          <ul>
          <li>
            <a
              href="https://solutions.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight"
            >
              <strong>Software Developer</strong> – Solutions by STC (Aug 2023 - Present)
            </a>
          </li>
          <li>
            <a
              href="https://www.mbrsc.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight"
            >
              <strong>AI Engineer</strong> – Mohammed Bin Rashed Space Centre (Jan 2022 - Jan 2023)
            </a>
          </li>
          <li>
            <a
              href="https://www.aus.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight"
            >
              <strong>Undergraduate Research Assistant (Data Analyst)</strong> – Amereican University of Sharjah (Sep 2021 - Jan 2023)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/tantum-projects-it-solutions-outsourcing/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight"
            >
              <strong>Junior Software Developer</strong> – Tantum Projects (Jul 2021 - Jul 2022)
            </a>
          </li>
          <li>
            <a
              href="https://www.aus.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-highlight"
            >
              <strong>Writing Center Tutor</strong> – Amereican University of Sharjah (Sep 2020 - Jan 2023)
            </a>
          </li>
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

      {/* Visitors Map Section */}
      <div className="content-container">
        <h3>
          Visitors
        </h3>
      </div>
      
      <MapWidget />

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
