import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import React from 'react';

const Navbar = () => {
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
      <div className="nav-right">
        <HashLink smooth to="/#about" className={'nav-right-link'}>
          About
        </HashLink>

        <HashLink smooth to="/#experience" className={'nav-right-link'}>
          Experience
        </HashLink>
        <HashLink smooth to="/#portfolio" className={'nav-right-link'}>
          Portfolio
        </HashLink>
        <HashLink smooth to="/#contact" className={'nav-right-link'}>
          Contact
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
