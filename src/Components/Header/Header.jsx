import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Fabien from "../../Docs/portrait.avif";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <span>Hello i&apos;m</span>
        <h1 className="header-name">Fabien Callot</h1>
        <h2 className="header-profession">Web developer</h2>

        <img src={Fabien} alt="face of Fabien" />
        <div className="header-button">
          <Link to="/cv" id={1} className={"header-button-cv"}>
            CV
          </Link>
          <HashLink
            smooth
            to="/#about"
            id={2}
            className={"header-button-about"}
          >
            About me
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
