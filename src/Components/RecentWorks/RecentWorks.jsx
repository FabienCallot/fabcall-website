import React from 'react';
import Card from '../Card/Card';
import Titles from '../Titles/Titles';
import Fabien from '../../Docs/portrait.png';

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
        imgSrc={Fabien}
        alt="home page Pokedex"
        buttonText="view More"
      />
    </section>
  );
};

export default RecentWorks;
