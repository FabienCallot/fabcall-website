import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className, link, text, clickEvent }) => {
  return (
    <a
      className={`button ${className}`}
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={clickEvent}
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  clickEvent: PropTypes.func,
};

export default React.memo(Button);
