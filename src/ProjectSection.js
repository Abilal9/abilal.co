import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectSection = ({ title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`fade-section ${inView ? "fade-in" : "fade-out"}`}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ProjectSection;
