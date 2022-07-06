import React from 'react';
import './button.scss';

const Button = ({ clickEvent, text, className }) => {
  return (
    <button className={`button ${className}`} onClick={clickEvent}>
      {text}
    </button>
  );
};

export default React.memo(Button);
