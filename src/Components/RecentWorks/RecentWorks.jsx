import React from 'react';
import Card from '../Card/Card';
import Titles from '../Titles/Titles';
import Pokedex from '../../Docs/Pokedex.png';
import Calculator from '../../Docs/Calculator.png';
import './recentWorks.scss';

const RecentWorks = () => {
  return (
    <section id="portfolio" className="recent-works">
      <Titles
        className="recent-works-title"
        firstTitle="Recent Works"
        secondTitle={'My Portfolio'}
      />
      <Card
        className="recent-works-card"
        title="Pokedex"
        imgSrc={Pokedex}
        alt="home page of pokedex-fab website"
        buttonText="view More"
        path={`/pokedex`}
      />
      <Card
        className="recent-works-card"
        title="Calculator"
        imgSrc={Calculator}
        alt="home page of fab-calculator web site"
        buttonText="view More"
        path={`/calculator`}
      />
    </section>
  );
};

export default RecentWorks;
