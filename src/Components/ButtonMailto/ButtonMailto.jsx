import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = { mailto };
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

ButtonMailto.propTypes = {
  mailto: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ButtonMailto;
