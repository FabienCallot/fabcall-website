import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Fabien from '../../Docs/portrait.avif';
import { scrollToTop } from '../../utils/scrollToTop';
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

        <img src={Fabien} alt="face of Fabien" />
        <div className="header-button">
          <Link
            to="/cv"
            id={1}
            className={
              !isActiveCv ? 'header-button-cv' : 'header-button-cv active'
            }
            onClick={(e) => {
              toggleActive(e.target.id);
              scrollToTop();
            }}
          >
            CV
          </Link>
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
      </div>
    </div>
  );
};

export default Header;
