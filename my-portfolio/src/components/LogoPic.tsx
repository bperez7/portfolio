// components/LogoPic.tsx
import React from 'react';

interface LogoPicProps {
  imageUrl: string;
}

const LogoPic: React.FC<LogoPicProps> = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="Logo" style={{
      width: '120px',
      height: '100px',
    //   borderRadius: '100%', // Makes the image round
      objectFit: 'cover', // Ensures the image covers the area, cropping it if necessary
    }} />
  );
};

export default LogoPic;