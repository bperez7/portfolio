import React from 'react';
import Profile from '../components/Profile';
import ProjectTile from '../components/ProjectTile';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Profile />
      <div className="project-list">
        {/* Add Project Tiles Here */}
        <ProjectTile name="Outbreak Game" description="A fun galaxy-esque shooter (JavaScript, Phaser)" githubLink="https://github.com/your-username/project1" />
        <ProjectTile name="Real Estate Calculator" description="Full-stack responsive calculator for real estate metrics (Go, React, TypeScript)" githubLink="https://github.com/your-username/project2" />
        {/* Add more project tiles as needed */}
      </div>
    </div>
  );
};

export default Home;
