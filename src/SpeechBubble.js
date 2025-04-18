import React, { useState, useEffect } from 'react';

const SpeechBubble = ({ isVisible }) => {
  const [shouldShow, setShouldShow] = useState(isVisible);

  useEffect(() => {
    setShouldShow(isVisible);
  }, [isVisible]);

  return (
    shouldShow && (
      <div className={`speech-bubble ${shouldShow ? 'visible' : ''}`} id="speechBubble">
        <p>Click me for dark mode!</p>
      </div>
    )
  );
};

export default SpeechBubble;
