import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import RecentWorks from '../RecentWorks/RecentWorks';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <RecentWorks />
    </div>
  );
};

export default Home;
