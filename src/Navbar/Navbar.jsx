import './Navbar.scss';
import { NavLink } from 'react-router-dom';

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
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-right-link active' : 'nav-right-link'
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-right-link active' : 'nav-right-link'
          }
          to="/cv"
        >
          CV
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-right-link active' : 'nav-right-link'
          }
          to="/experience"
        >
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'nav-right-link active' : 'nav-right-link'
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
