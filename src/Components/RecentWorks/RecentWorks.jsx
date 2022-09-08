import React from "react";
import Card from "../Card/Card";
import Titles from "../Titles/Titles";
import Pokedex from "../../Docs/pokedex.jpg";
import Calculator from "../../Docs/calculator.jpg";
import Kanban from "../../Docs/kanban.jpg";
import shiFuMi from "../../Docs/shiFuMi.jpg";
import "./recentWorks.scss";

const RecentWorks = () => {
  return (
    <section id="portfolio" className="recent-works">
      <Titles
        className="recent-works-title"
        firstTitle="Recent Works"
        secondTitle={"My Portfolio"}
      />
      <div className="cards">
        <Card
          className="recent-works-card"
          title="Pokedex"
          imgSrc={Pokedex}
          alt="home page of pokedex-fab website"
          buttonText1="visit"
          buttonText2="Repo"
          path1={"https://pokedex-jade-sigma.vercel.app/"}
          path2={"https://github.com/FabienCallot/Pokedex-React"}
        />
        <Card
          className="recent-works-card"
          title="Calculator"
          imgSrc={Calculator}
          alt="home page of fab-calculator web site"
          buttonText1="visit"
          buttonText2="Repo"
          path1={"https://calculator-fabiencallot.vercel.app/"}
          path2={"https://github.com/FabienCallot/Calculator"}
        />
        <Card
          className="recent-works-card"
          title="Kanban"
          imgSrc={Kanban}
          alt="home page of Kanban web site"
          buttonText1="visit"
          buttonText2="Repo"
          path1={"https://kanban-node-react.vercel.app/"}
          path2={"https://github.com/FabienCallot/kanban-node-react-app"}
        />
        <Card
          className="recent-works-card"
          title="Shi Fu Mi"
          imgSrc={shiFuMi}
          alt="home page of Kanban web site"
          buttonText1="visit"
          buttonText2="Repo"
          path1={"https://github.com/FabienCallot/Shi-Fu-Mi"}
          path2={"https://github.com/FabienCallot/Shi-Fu-Mi"}
        />
      </div>
    </section>
  );
};

export default React.memo(RecentWorks);
