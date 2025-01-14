import React from 'react';
import PropTypes from 'prop-types';
import OpenLink from './OpenLink';
import CopyLink from './CopyLink';

function HelpfulResource({ link, label }) {
  return (
    <div className="helpful-resource" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
}

HelpfulResource.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default HelpfulResource;