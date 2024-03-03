import React from 'react';

interface ProjectTileProps {
  name: string;
  description: string;
  githubLink: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ name, description, githubLink }) => {
  return (
    <div className="project-tile">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectTile;
