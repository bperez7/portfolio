import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container contact-info">
      <h1>Contact Me</h1>
      <p>If you're interested in my work and want to get in touch, feel free to reach out through any of the following platforms:</p>
      <div className="contact-details">
        <p><strong>Name:</strong> Your Name</p>
        <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
      </div>
    </div>
  );
};

export default Contact;
