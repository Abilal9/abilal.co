import React, { useState, useEffect } from 'react';
import './App.css';
import profilePic from "./assets/profile_pic.jpg";
import profilePic2 from "./assets/profile_pic_2.jpg";

const ProfileFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  useEffect(() => {
    if (isFlipped) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isFlipped]);

  return (
    <div className="profile-container" onClick={handleClick}>
      <div className={`profile-img ${isFlipped ? 'flipped' : ''}`}>
        <img
          src={isFlipped ? profilePic2 : profilePic}
          alt="Profile"
          className="profile-img-content"
        />
      </div>
    </div>
  );
};

export default ProfileFlip;