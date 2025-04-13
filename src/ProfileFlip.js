import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling
import profilePic from "./assets/profile_pic.jpg";
import profilePic2 from "./assets/profile_pic_2.jpg";

const ProfileFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prevState => !prevState); // Toggle the flipped state on click
  };

  return (
    <div className="profile-container" onClick={handleClick}>
      <div className={`profile-img ${isFlipped ? 'flipped' : ''}`}>
        {/* Show profile_pic1 by default, then profile_pic2 after flip */}
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