import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Hamburger from 'hamburger-react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const handlePageWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = handlePageWidth;
  }, []);

  return (
    <nav className="nav">
      <div className="nav-left">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-left-title' : 'nav-left-title'
          }
          to="/"
        >
          Fab.
        </NavLink>
      </div>
      {width < 490 ? (
        <div className="nav-right">
          <Hamburger
            rounded
            duration={0.6}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      ) : (
        <div className="nav-right">
          <HashLink smooth to="/#about" className={'nav-right-link'}>
            About
          </HashLink>
          {/* <HashLink smooth to="/#experience" className={'nav-right-link'}>
            Experience
          </HashLink> */}
          <HashLink smooth to="/#portfolio" className={'nav-right-link'}>
            Portfolio
          </HashLink>
          <HashLink smooth to="/#contact" className={'nav-right-link'}>
            Contact
          </HashLink>
        </div>
      )}

      {isOpen && (
        <div className="nav-modal">
          <div className="nav-modal-right">
            <HashLink
              smooth
              to="/#about"
              className={'nav-modal-right-link'}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </HashLink>
            {/* <HashLink
              smooth
              to="/#experience"
              className={'nav-modal-right-link'}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Experience
            </HashLink> */}
            <HashLink
              smooth
              to="/#portfolio"
              className={'nav-modal-right-link'}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Portfolio
            </HashLink>
            <HashLink
              smooth
              to="/#contact"
              className={'nav-modal-right-link'}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
