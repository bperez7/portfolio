import React from 'react';
import Profile from '../components/Profile';
import ProjectTile from '../components/ProjectTile';
import ProfilePic from '../components/ProfilePic'; // Import the new component
import LogoPic from '../components/LogoPic';

import outbreakImage from '../assets/outbreak_game.png';
import closingCostsImage from '../assets/closing_costs.png';
import multimodalDAWImage from '../assets/MultimodalDAW.png';
import profileImageUrl from '../assets/profile.png'; // Your profile image URL
import mitLogo from '../assets/MIT-logo-do.png'; 
import stockPhoto from '../assets/stock_photo.png'

const Home: React.FC = () => {
  return (
    <div className="home" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <LogoPic imageUrl={mitLogo} />
      </div>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ProfilePic imageUrl={profileImageUrl} />
      </div>
      <Profile />
      <div className="project-list" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginTop: '20px'
      }}>
        <ProjectTile imageUrl={outbreakImage} name="Outbreak Game" description="A fun galaxy-esque shooter (JavaScript, Phaser)" githubLink="https://github.com/your-username/project1" />
        <ProjectTile imageUrl={closingCostsImage} name="Real Estate Calculator" description="Full-stack responsive calculator for real estate metrics (Go, React, TypeScript)" githubLink="https://github.com/your-username/project2" />
        <ProjectTile imageUrl={multimodalDAWImage} name="Multimodal DAW" description="A touchless digital audio workstation" githubLink="https://github.com/bperez7/MultimodalDAW" />
        <ProjectTile imageUrl={stockPhoto} name="Live Stock Calculator" description="Interactive live stock data calculator (Python/React)" githubLink="https://github.com/bperez7/stock_calculator" />
      </div>
    </div>
  );
};

export default Home;
