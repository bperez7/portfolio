import React from 'react';
import Profile from '../components/Profile';
import ProjectTile from '../components/ProjectTile';
import ProfilePic from '../components/ProfilePic';
import LogoPic from '../components/LogoPic';

import outbreakImage from '../assets/outbreak_game.png';
import closingCostsImage from '../assets/closing_costs.png';
import multimodalDAWImage from '../assets/MultimodalDAW.png';
import profileImageUrl from '../assets/profile.png';
import mitLogo from '../assets/MIT-logo-do.png';
import stockPhoto from '../assets/stock_photo.png';
import '../Home.css'; // Import the CSS file


const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="logo">
          <LogoPic imageUrl={mitLogo} />
        </div>
        <div className="profile-pic">
          <ProfilePic imageUrl={profileImageUrl} />
        </div>
      </div>
      <Profile />
      <div className="project-list">
        <ProjectTile
          imageUrl={outbreakImage}
          name="Outbreak Game"
          description="A fun galaxy-esque shooter (JavaScript, Phaser)"
          githubLink="https://github.com/your-username/project1"
        />
        <ProjectTile
          imageUrl={closingCostsImage}
          name="Real Estate Calculator"
          description="Full-stack responsive calculator for real estate metrics (Go, React, TypeScript)"
          githubLink="https://github.com/your-username/project2"
        />
        <ProjectTile
          imageUrl={multimodalDAWImage}
          name="Multimodal DAW"
          description="A touchless digital audio workstation"
          githubLink="https://github.com/bperez7/MultimodalDAW"
        />
        <ProjectTile
          imageUrl={stockPhoto}
          name="Live Stock Calculator"
          description="Interactive live stock data calculator (Python/React)"
          githubLink="https://github.com/bperez7/stock_calculator"
        />
      </div>
    </div>
  );
};

export default Home;
