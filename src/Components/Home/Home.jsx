import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutMe />
    </div>
  );
};

export default Home;
