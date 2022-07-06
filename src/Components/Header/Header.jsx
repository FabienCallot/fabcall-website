import React from 'react';
import Fabien from '../../Docs/portrait.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <span>Hello i'm</span>
        <h1 className="header-name">Fabien Callot</h1>
        <h2 className="header-profession">junior web developer</h2>
        <img src={Fabien} alt="face of Fabien" />
      </div>
    </div>
  );
};

export default Header;
