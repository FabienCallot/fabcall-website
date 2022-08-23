import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({
  className,
  title,
  imgSrc,
  alt,
  buttonText1,
  buttonText2,
  path1,
  path2,
}) => {
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <img src={imgSrc} alt={alt} />
      <div className="card-buttons">
        <Button className="card-button" link={path1} text={buttonText1} />
        <Button className="card-button" link={path2} text={buttonText2} />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  buttonText1: PropTypes.string.isRequired,
  buttonText2: PropTypes.string.isRequired,
  path1: PropTypes.string.isRequired,
  path2: PropTypes.string.isRequired,
};

export default React.memo(Card);
