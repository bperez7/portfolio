import React from 'react';
import './component_styles.css';

interface ProjectTileProps {
  name: string;
  description: string;
  githubLink: string;
  imageUrl: string; // Ensure this prop is included if not already
}

const ProjectTile: React.FC<ProjectTileProps> = ({ name, description, githubLink, imageUrl }) => {
  return (
    <div className="project-tile" style={{
      background: 'white',
      border: '1px solid #ccc',
      padding: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: '100%', // Makes the image take the full width of its container
          height: '200px', // Sets a fixed height
          objectFit: 'cover', // Covers the area of the img element, cropping the image if necessary
          display: 'block' // Removes bottom space/gap
        }}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};


export default ProjectTile;

