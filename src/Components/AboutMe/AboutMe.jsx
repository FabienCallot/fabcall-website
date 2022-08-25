import React from 'react';
import { useNavigate } from 'react-router-dom';
import Titles from '../Titles/Titles';
import Code from '../../Docs/code.jpeg';
import Button from '../Button/Button';
import './aboutMe.scss';

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <section className="about" id="about">
      <Titles
        className="about-titles"
        firstTitle="About Me"
        secondTitle="My intro"
      />
      <div className="about-content">
        <div className="about-content-img">
          <img src={Code} alt="Fabien" />
        </div>
        <p className="about-content-text">
          Junior web developer, I just finished my full stack JS training at
          O&apos;Clock. Self-taught since then, I&apos;m working on my
          professional reconversion after having created and managed my own
          escape game in Lille for more than 5 years...
        </p>
      </div>
      <div className="about-content-button">
        <Button
          className={''}
          text={'Read more'}
          clickEvent={() => navigate('/about-me')}
        />
      </div>
    </section>
  );
};

export default AboutMe;
