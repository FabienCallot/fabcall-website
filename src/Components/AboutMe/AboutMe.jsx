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
            Hi, I&apos;m Fabien, and I&apos;ve been working in web development
            for 3 years now. I work for Dotmap, a corporate events company,
            where I design and maintain web applications for team entertainment,
            both indoors and outdoors. I mainly develop in VueJs, which has
            become my main language. After creating and running my own escape
            game for 5 years, this new challenge has paid off! Enthusiastic and
            determined, I continue to progress day by day in this fabulous and
            complex profession! Don&apos;t hesitate to contact me if you&apos;d
            like to talk to me, I&apos;d be delighted to.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutMe);
