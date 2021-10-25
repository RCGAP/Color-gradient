import React from 'react';
import PropTypes from 'prop-types';

const NbColors = ({ nbColors }) => {
  return (
    <div id="nbColors">{nbColors}</div>
  );
};

NbColors.propTypes = {
  nbColors: PropTypes.number.isRequired,
};

export default NbColors;
