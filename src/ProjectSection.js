import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectSection = ({ title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      ref={ref}
      className={`project-section ${inView ? "fade-in" : "fade-out"} ${
        expanded ? "expanded" : ""
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <h2>{title}</h2>
      <p className={`project-description ${expanded ? "show" : "hide"}`}>
        {description}
      </p>
    </section>
  );
};

export default ProjectSection;