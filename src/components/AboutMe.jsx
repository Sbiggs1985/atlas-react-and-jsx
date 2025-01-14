import React from 'react';

function AboutMe() {
  return (
    <div className="about-me">
      {/* Replace with your actual image URL */}
      <img 
        src="/images/Myself1.jpg"
        alt="Stephaine Biggs" 
        className="profile-picture" 
        style={{ borderRadius: '50%', width: '150px', height: '150px' }}
      />
      <p>
        Hello! My name is <strong>Stephaine Biggs</strong>. I am currently specializing in <strong>Full Stack Web Development</strong>.
        My favorite technologies to work with include <strong>React, Python, and JavaScript</strong>.
        After school, I aspire to become a <strong>Front-End Developer</strong>, working on interactive and visually engaging applications.
        Outside of coding, I enjoy <strong>hiking, biking, working out, reading, and gaming</strong>. 
        I’m passionate about continuous learning and exploring new challenges!
      </p>
    </div>
  );
}

export default AboutMe;