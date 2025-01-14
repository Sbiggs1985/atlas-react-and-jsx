import React from 'react';
import PropTypes from 'prop-types';
import openIcon from '../assets/open.svg';

function OpenLink({ link }) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'inline-block' }}
      >
        <img 
          src={openIcon} 
          alt="Open link" 
          style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
        />
      </a>
    );
  }
  
  OpenLink.propTypes = {
    link: PropTypes.string.isRequired,
  };
  
  export default OpenLink;

  // Explanatiom

  // 1. Prop link: The link prop is passed into the component and used as the href for the <a> tag.
  // 2. Anchor Tag: The <a> tag uses target="blank" to open the link in a new tab & rel-"noopener noreferror" for security reasons (to prevent tab-nabbing.)
  // 3. Image: The openIcon image is used as the visual indicator.