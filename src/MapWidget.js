import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const MapWidget = () => {
  const mapContainerRef = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Combine refs
  const setRefs = (node) => {
    mapContainerRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = '//mapmyvisitors.com/map.js?d=_398xWPLMb0rZ8THgM2TTXBsmWlQsTX7pWuKu5IjpG0&cl=ffffff&w=a';
    script.async = true;

    // Append script to the map container
    if (mapContainerRef.current) {
      mapContainerRef.current.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (mapContainerRef.current && script.parentNode) {
        mapContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={setRefs} 
      className={`map-container ${inView ? 'fade-in' : 'fade-out'}`}
    ></div>
  );
};

export default MapWidget;

