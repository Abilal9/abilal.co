import React, { useState, useEffect } from 'react';
import ProfileFlip from './ProfileFlip.js'; 
import SpeechBubble from './SpeechBubble.js'; 
import './App.css';

const ParentComponent = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsBubbleVisible(false);
    setIsFlipped(prev => !prev);
  };

  useEffect(() => {
    if (isFlipped) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Force browser repaint/reflow for mobile Safari
    // This ensures transitions trigger properly on iOS
    void document.body.offsetHeight;
    
    // Also force repaint on all transition elements
    requestAnimationFrame(() => {
      document.body.style.transform = 'translateZ(0)';
      requestAnimationFrame(() => {
        document.body.style.transform = '';
      });
    });
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
