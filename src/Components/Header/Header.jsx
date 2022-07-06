import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Fabien from '../../Docs/portrait.png';
import './header.scss';

const Header = () => {
  const [isActiveCv, setActiveCv] = useState(false);
  const [isActiveAbout, setActiveAbout] = useState(false);
  const toggleActive = () => {
    if (!isActiveCv) {
      setActiveCv(true);
      setActiveAbout(false);
    } else if (isActiveCv) {
      setActiveCv(false);
      setActiveAbout(true);
    }
  };
  return (
    <div className="header">
      <div className="header-text">
        <span>Hello i'm</span>
        <h1 className="header-name">Fabien Callot</h1>
        <h2 className="header-profession">junior web developer</h2>
        <div className="header-button">
          <HashLink
            smooth
            to="/#contact"
            className={
              !isActiveCv
                ? 'header-button-cv'
                : 'header-button-cv header-button-about-active'
            }
            onClick={() => {
              !isActiveCv && toggleActive();
            }}
          >
            CV
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            className={
              !isActiveAbout
                ? 'header-button-about'
                : 'header-button-about header-button-about-active'
            }
            onClick={() => {
              !isActiveAbout && toggleActive();
            }}
          >
            About me
          </HashLink>
        </div>
        <img src={Fabien} alt="face of Fabien" />
      </div>
    </div>
  );
};

export default Header;
