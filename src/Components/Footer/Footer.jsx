import React from 'react';
import linkedin from '../../Docs/linkedin.svg';
import gmail from '../../Docs/gmail.svg';
import twitter from '../../Docs/twitter.svg';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-contact">Contact Me</h1>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/in/fabien-callot-7a6526120/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-logo" src={linkedin} alt="logo Linkedin" />
        </a>
        <a href="mailto:fab.callot@gmail.com">
          <img className="footer-logo" src={gmail} alt="logo gmail" />
        </a>
        <a
          href="https://twitter.com/FabCallDev"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-logo" src={twitter} alt="logo Linkedin" />
        </a>
      </div>

      <p>Copyright &copy; 2022</p>
    </div>
  );
};

export default Footer;
