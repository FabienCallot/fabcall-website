import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className, clickEvent, text }) => {
  return (
    // FIXME: util className proprtypes ???
    <button className={`button ${className}`} onClick={clickEvent}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default React.memo(Button);
