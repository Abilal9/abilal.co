import React, { useState } from 'react';
import ProfileFlip from './ProfileFlip.js'; 
import SpeechBubble from './SpeechBubble.js'; 
import './App.css';

const ParentComponent = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);  

  const handleProfileClick = () => {
    setIsBubbleVisible(false); 
  };

  return (
    <div>
      <SpeechBubble isVisible={isBubbleVisible} /> 
      <ProfileFlip onProfileClick={handleProfileClick} /> 
    </div>
  );
};

export default ParentComponent;
