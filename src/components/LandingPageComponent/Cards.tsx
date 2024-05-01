import React from "react";
import styles from "./Cards.module.css";

type CardsType = {
  name: string;
  index: number;
  clickedItem: (index: number) => void;
};

const Cards = ({ name, index, clickedItem }: CardsType) => {
  const captureOnClick = (e: any, index: number) => {
    e.preventDefault();
    clickedItem(index);
  };
  return (
    <div
      className={styles.mainCardClass}
      onClick={(e) => captureOnClick(e, index)}
    >
      {name}
    </div>
  );
};

export default Cards;
