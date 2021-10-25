import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ direction, changeDirection }) => (
  <button onClick={changeDirection} type="button" className="button">{direction}</button>
);

Button.propTypes = {
  direction: PropTypes.string.isRequired,
  changeDirection: PropTypes.func.isRequired,
};

export default Button;
