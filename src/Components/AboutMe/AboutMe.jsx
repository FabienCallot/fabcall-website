import React from 'react';
import Titles from '../Titles/Titles';
import './aboutMe.scss';

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <Titles
          className="about-titles"
          firstTitle="About Me"
          secondTitle="My intro"
        />
      </section>
    </>
  );
};

export default AboutMe;
