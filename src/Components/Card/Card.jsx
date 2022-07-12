import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ className, title, imgSrc, alt, path, buttonText }) => {
  const navigate = useNavigate();
  return (
    <div className={`card ${className}`}>
      <h3 className="card-title">{title}</h3>
      <img src={imgSrc} alt={alt} />
      <Button
        className="card-button"
        clickEvent={() => {
          navigate(`${path}`);
        }}
        text={buttonText}
      />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default React.memo(Card);
