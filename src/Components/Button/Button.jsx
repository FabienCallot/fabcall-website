import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className, clickEvent, text }) => {
  return (
    <button className={`button ${className}`} onClick={clickEvent}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default React.memo(Button);
