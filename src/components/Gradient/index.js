import React from 'react';
import PropTypes from 'prop-types';

const Gradient = ({ direction, color, secondColor }) => (
  <div
    id="gradient"
    style={{
      background: `linear-gradient(${direction}, ${color}, ${secondColor})`,
    }}
  />
);

Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
};

export default Gradient;
