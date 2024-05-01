import React from "react";
import Cards from "./Cards";
import styles from "./Cards.module.css";

const LandingPageComponent = () => {
  const cardsArray = [
    {
      name: "Play Game",
      route: "/game",
    },
    {
      name: "Counter",
      route: "/counter",
    },
    {
      name: "Context Basic",
      route: "/contextbasic",
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
