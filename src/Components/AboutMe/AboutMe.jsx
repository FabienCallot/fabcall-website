import React from "react";
import Titles from "../Titles/Titles";
import Code from "../../Docs/code.jpeg";
import "./aboutMe.scss";

const AboutMe = () => {
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
            Hi, I&apos;m Fabien, web developer for 2 and a half years, I&apos;m
            currently following a career change. I&apos;m currently working for
            Dotmap, an events company, where I design and maintain web
            applications for organising different types of team games, both
            indoor and outdoor. I mainly develop in VueJs, which has become my
            main language. I also love CSS, which I practise regularly. After
            creating and managing my own escape game for 5 years, the challenge
            has paid off! Enthusiastic and determined, I continue to progress
            day by day in this fabulous and complex profession! Don&apos;t
            hesitate to contact me if you&apos;d like to talk to me, I&apos;d be
            delighted to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
