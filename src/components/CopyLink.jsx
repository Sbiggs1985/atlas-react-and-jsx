import React from 'react';
import PropTypes from 'prop-types';
import copyIcon from '../assets/copy.svg';

function CopyLink({ link }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(link)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(() => {
        alert('Failed to copy the link.');
      });
  };

  return (
    <img
      src={copyIcon}
      alt="Copy link"
      className="copy"
      style={{ width: '20px', height: '20px', cursor: 'pointer' }}
      onClick={handleCopy}
    />
  );
}

CopyLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyLink;