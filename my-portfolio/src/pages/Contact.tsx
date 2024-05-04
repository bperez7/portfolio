import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container contact-info">
      <h1>Contact Me</h1>
      <p>If you're interested in my work and want to get in touch, feel free to reach out through any of the following platforms:</p>
      <div className="contact-details">
        <p><strong>Name:</strong> Brandon Perez </p>
        <p><strong>Email:</strong> <a href="mailto:bperez@alum.mit.edu">bperez@alum.mit.edu</a></p>
        <p><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/brandon-perez-sd" target="_blank" rel="noopener noreferrer">http://www.linkedin.com/in/brandon-perez-sd</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/bperez7" target="_blank" rel="noopener noreferrer">https://github.com/bperez7</a></p>
      </div>
    </div>
  );
};

export default Contact;
