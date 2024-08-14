import React from "react";
import PropTypes from "prop-types";
import "./titles.scss";

const Titles = ({ className, firstTitle, secondTitle }) => {
  return (
    <div className={`titles ${className}`}>
      <h2>{firstTitle}</h2>
      <h3>{secondTitle}</h3>
    </div>
  );
};

Titles.propTypes = {
  className: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
};

export default React.memo(Titles);
