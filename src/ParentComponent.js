import React, { useState, useEffect, useRef } from 'react';
import ProfileFlip from './ProfileFlip.js'; 
import SpeechBubble from './SpeechBubble.js'; 
import './App.css';

const ParentComponent = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rafIdRef = useRef(null);

  const handleClick = () => {
    // Prevent rapid clicking during transition
    if (isTransitioning) return;
    
    setIsBubbleVisible(false);
    setIsFlipped(prev => !prev);
    setIsTransitioning(true);
    
    // Reset transitioning state after 700ms (transition duration)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  useEffect(() => {
    // Cancel any pending animation frames
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    
    // Apply dark mode class
    if (isFlipped) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Force immediate repaint for mobile Safari
    // Read offsetHeight to force a synchronous reflow
    void document.body.offsetHeight;
    
    // Then force a paint with RAF (only once, not nested)
    rafIdRef.current = requestAnimationFrame(() => {
      // Force all elements to recalculate styles
      const elements = document.querySelectorAll('.profile-img, .background-shape, .name, .title, .extra-info, h2, h3, .arrow, .socials p');
      elements.forEach(el => {
        void el.offsetHeight;
      });
    });
    
    // Cleanup
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isFlipped]);

  return (
    <div className="profile-wrapper">
      <div className="profile-img-wrapper-container">
        <SpeechBubble isVisible={isBubbleVisible} onClick={handleClick} /> 
        <ProfileFlip isFlipped={isFlipped} onProfileClick={handleClick} /> 
      </div>
    </div>
  );
};

export default ParentComponent;
