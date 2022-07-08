import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, img, alt, path, buttonText }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={img} alt={alt} />
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

export default Card;
