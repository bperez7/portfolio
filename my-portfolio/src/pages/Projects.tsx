import React from 'react';
import ProjectTile from '../components/ProjectTile';

import outbreakImage from '../assets/outbreak_game.png';
import closingCostsImage from '../assets/closing_costs.png';
import multimodalDAWImage from '../assets/MultimodalDAW.png';
import stockPhoto from '../assets/stock_photo.png'

const projects = [
  {
    id: 1,
    name: "Outbreak Game",
    description: "A fun galaxy-esque shooter (JavaScript, Phaser)",
    githubLink: "https://github.com/bperez7/outbreak",
    imageUrl: outbreakImage
  },
  {
    id: 2,
    name: "Real Estate Calculator",
    description: "Full-stack responsive calculator for real estate metrics (Go, React, TypeScript)",
    githubLink: "https://github.com/bperez7/closing_costs",
    imageUrl: closingCostsImage
  },
  {
    id: 3,
    name: "Multimodal DAW",
    description: "A touchless digital audio workstation (Javascript)",
    githubLink: "https://github.com/bperez7/MultimodalDAW",
    imageUrl: multimodalDAWImage
  },
  {
    id: 3,
    name: "Live Stock Calculator",
    description: "Interactive live stock data calculator (Python/React)",
    githubLink: "https://github.com/bperez7/stock_calculator",
    imageUrl: stockPhoto
  },

  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectTile
            imageUrl={project.imageUrl}
            key={project.id}
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
