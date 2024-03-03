import React from 'react';
import ProjectTile from '../components/ProjectTile';

// Example project data
const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a brief description of Project One.",
    githubLink: "https://github.com/yourusername/projectone",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    githubLink: "https://github.com/yourusername/projecttwo",
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
