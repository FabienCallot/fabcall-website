import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ className, link, text }) => {
  console.log(link);
  return (
    <a
      className={`button ${className}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(Button);
