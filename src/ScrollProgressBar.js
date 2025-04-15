import React, { useEffect, useRef, useState } from "react";

const ScrollProgressBar = () => {
  const progressRef = useRef(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const currentProgress = useRef(0);

  useEffect(() => {
    const updateTargetProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setTargetProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateTargetProgress);
    updateTargetProgress(); // initial run

    return () => window.removeEventListener("scroll", updateTargetProgress);
  }, []);

  useEffect(() => {
    let animationFrame;

    const smoothScroll = () => {
      // Lerp for smooth transition
      currentProgress.current += (targetProgress - currentProgress.current) * 0.1;

      if (progressRef.current) {
        progressRef.current.style.height = `${currentProgress.current.toFixed(2)}%`;
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetProgress]);

  return (
    <div className="progress-sidebar">
      <div ref={progressRef} className="progress-indicator" />
    </div>
  );
};

export default ScrollProgressBar;