import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectSection = ({ title, description, duration, role, company, logo }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      ref={ref}
      className={`project-section ${inView ? "fade-in" : "fade-out"} ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <h2>{title}</h2>
      <p className="project-description">
        <strong className="project-label">Description:</strong>
      </p>
      <p className="project-description">{description}</p>
      <div className="project-details">
        <p>
          <strong className="project-label">Duration:</strong> {duration}
        </p>
        <p>
          <strong className="project-label">Role:</strong> {role}
        </p>
        <p>
          <strong className="project-label">Associated with:</strong> {company}
        </p>
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="project-logo"
          />
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
