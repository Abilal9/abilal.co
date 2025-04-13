import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectSection = ({ title, description, duration, company, logo }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      ref={ref}
      className={`project-section ${inView ? "fade-in" : "fade-out"} ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <h2>{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-details">
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Associated with:</strong> {company}</p>
        <img src={logo} alt={`${company} logo`} className="project-logo" />
      </div>
    </section>
  );
};

export default ProjectSection;