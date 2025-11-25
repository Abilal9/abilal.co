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
    
    // Apply dark mode class to both body and html
    const html = document.documentElement;
    const body = document.body;
    
    if (isFlipped) {
      body.classList.add('dark-mode');
      html.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      html.classList.remove('dark-mode');
    }
    
    // CRITICAL: Force body AND html background to update immediately on mobile Safari
    // This is the key fix for the background not changing
    const currentBodyBg = window.getComputedStyle(body).backgroundColor;
    const currentHtmlBg = window.getComputedStyle(html).backgroundColor;
    
    // Force immediate style recalculation on both
    void body.offsetHeight;
    void html.offsetHeight;
    
    // Force background color recalculation by temporarily setting it
    body.style.backgroundColor = currentBodyBg;
    html.style.backgroundColor = currentHtmlBg;
    
    // Use RAF to clear the inline styles and let CSS take over
    rafIdRef.current = requestAnimationFrame(() => {
      body.style.backgroundColor = '';
      html.style.backgroundColor = '';
      
      // Also force profile image border recalculation
      const profileImg = document.querySelector('.profile-img');
      if (profileImg) {
        const currentBorder = window.getComputedStyle(profileImg).borderColor;
        profileImg.style.borderColor = currentBorder;
        requestAnimationFrame(() => {
          profileImg.style.borderColor = '';
        });
      }
      
      // Force all other elements to recalculate styles
      const elements = document.querySelectorAll('.background-shape, .name, .title, .extra-info, h2, h3, .arrow, .socials p');
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
