import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Titles from '../Titles/Titles';
import Code from '../../Docs/code.jpeg';
//import Button from '../Button/Button';
import './aboutMe.scss';

const AboutMe = () => {
  //const navigate = useNavigate();
  return (
    <section className="about" id="about">
      <Titles
        className="about-titles"
        firstTitle="About Me"
        secondTitle="My intro"
      />
      <div className="about-content">
        <div className="about-content-left">
          <img src={Code} alt="Fabien" />
        </div>
        <div className="about-content-right">
          <p className="about-content-text">
            Junior web developer, I just finished my 6 months full stack JS
            training offered by O&apos;Clock school. Since then, I&apos;ve been
            self-taught and I&apos;m working I&apos;m currently looking for a
            job or an internship to finally launch myself and confirm my
            professional reconversion after having created and managed my own
            escape game for 5 years. Enthusiastic and determined, I continue to
            progress day after day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
