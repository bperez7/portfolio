// components/ProfilePic.tsx
import React from 'react';

interface ProfilePicProps {
  imageUrl: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="Profile" style={{
      width: '100px',
      height: '100px',
      borderRadius: '100%', // Makes the image round
      objectFit: 'cover', // Ensures the image covers the area, cropping it if necessary
    }} />
  );
};

export default ProfilePic;
