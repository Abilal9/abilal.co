import React, { useState, useEffect } from 'react';

const SpeechBubble = ({ isVisible, onClick }) => {
  const [shouldShow, setShouldShow] = useState(isVisible);

  useEffect(() => {
    setShouldShow(isVisible);
  }, [isVisible]);

  return (
    shouldShow && (
      <div 
        className={`speech-bubble ${shouldShow ? 'visible' : ''}`} 
        id="speechBubble"
        onClick={onClick}
      >
        <p>Click me for dark mode!</p>
      </div>
    )
  );
};

export default SpeechBubble;
