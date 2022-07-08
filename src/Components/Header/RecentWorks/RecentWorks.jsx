import React from 'react';
import Titles from '../../Titles/Titles';

const RecentWorks = () => {
  return (
    <section className="recent-works">
      <Titles
        className="recent-works-title"
        firstTitle="Recent Works"
        secondTitle={'My Portfolio'}
      />
    </section>
  );
};

export default RecentWorks;
