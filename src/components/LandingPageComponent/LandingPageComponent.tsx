import React from "react";
import Cards from "./Cards";
import styles from "./Cards.module.css";
import { checkIfLocal } from "../../utility/checkIfLocal";

const LandingPageComponent = () => {
  const cardsArray = [
    {
      name: "Play Game",
      route: typeof window!=='undefined' && window && checkIfLocal(window.location.hostname)
        ? "/game"
        : "/machine-coding/game",
    },
    {
      name: "Counter",
      route: typeof window!=='undefined' && window && checkIfLocal(window.location.hostname)
        ? "/counter"
        : "/machine-coding/counter",
    },
    {
      name: "Context Basic",
      route: typeof window!=='undefined' && window && checkIfLocal(window.location.hostname)
        ? "/contextbasic"
        : "/machine-coding/contextbasic",
    },
  ];

  const handleClick = (index: number) => {
    window.location.href = `${cardsArray[index]?.route}`;
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Welcome to Machine Coding!</h1>
      <div className={styles.mainDiv}>
        {cardsArray &&
          cardsArray.map((card, index) => {
            return (
              <>
                <Cards
                  name={card.name}
                  index={index}
                  clickedItem={handleClick}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default LandingPageComponent;
