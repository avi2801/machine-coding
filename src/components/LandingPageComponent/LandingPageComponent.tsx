import React, { useState } from "react";
import Cards from "./Cards";
import styles from "./Cards.module.css";
import Modal from "@/pages/modalPopup";

const LandingPageComponent = () => {
  const [showModalPopUp, setModalPopUp] = useState<boolean>(false);
  const cardsArray = [
    {
      name: "Play Game",
      route: "machine-coding/game",
    },
    {
      name: "Counter",
      route: "machine-coding/counter",
    },
    {
      name: "Context Basic",
      route: "machine-coding/contextbasic",
    },
    {
      name: "Rating Component",
      route: "machine-coding/rating",
    },
    {
      name:"Drop Down Component",
      route:'machine-coding/dropDown'
    },
    {
      name:"Progress Component",
      route:'machine-coding/progressBar'
    }
  ];

  const handleClick = (index: number) => {
    window.location.href = `${cardsArray[index]?.route}`;
  };
  const modalPopUpCallback = () => {
    setModalPopUp(false);
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
      <button style={{ cursor: "pointer" }} onClick={() => setModalPopUp(true)}>
        Show Modal PopUp
      </button>
      <Modal
        showModalPopUp={showModalPopUp}
        modalPopUpCallback={modalPopUpCallback}
      />
    </div>
  );
};

export default LandingPageComponent;
