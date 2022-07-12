import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import Fabien from '../../Docs/portrait415_311.avif';
import './header.scss';

const Header = () => {
  const [isActiveCv, setActiveCv] = useState(false);
  const [isActiveAbout, setActiveAbout] = useState(false);

  const toggleActive = (id) => {
    if (id === '1') {
      setActiveCv(true);
      setActiveAbout(false);
    } else if (id === '2') {
      setActiveCv(false);
      setActiveAbout(true);
    } else {
      return;
    }
  };

  return (
    <div className="header">
      <div className="header-text">
        <span>Hello i&apos;m</span>
        <h1 className="header-name">Fabien Callot</h1>
        <h2 className="header-profession">junior web developer</h2>
        <div className="header-button">
          {/* TODO: choice to make an hashlink or link to another page for the cv*/}
          <HashLink
            smooth
            to="/#cv"
            id={1}
            className={
              !isActiveCv ? 'header-button-cv' : 'header-button-cv active'
            }
            onClick={(e) => {
              toggleActive(e.target.id);
            }}
          >
            CV
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            id={2}
            className={
              !isActiveAbout
                ? 'header-button-about'
                : 'header-button-about active'
            }
            onClick={(e) => {
              toggleActive(e.target.id);
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
