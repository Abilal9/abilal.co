import React from 'react';
import './App.css';
import profilePic from "./assets/profile_pic.jpg";
import profilePic2 from "./assets/profile_pic_2.jpg";

const ProfileFlip = ({ isFlipped, onProfileClick }) => {
  return (
    <div className="profile-img-wrapper" onClick={onProfileClick}>
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
