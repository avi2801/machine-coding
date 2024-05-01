import React, { useState } from "react";
import styles from "./style.module.css";
import Square from "./Square";

const TicTacToeGame = () => {
  const { flexClass, mainContainer } = styles;
  const [gameArray, setGameArray] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const checkWinner = () => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i];
      if (
        gameArray[a] &&
        gameArray[a] === gameArray[b] &&
        gameArray[b] === gameArray[c]
      ) {
        return `${gameArray[a]} is the winner`;
      }
    }
    if (counter === 9) {
      return "No one wins";
    }

    return;
  };

  const onClickHandler = (index: number) => {
    const array = [...gameArray];
    if (array[index] !== null) {
      alert("Already filled value");
    } else {
      array[index] = isX ? "X" : "O";
      setGameArray(array);
      setIsX((prev) => !prev);
      setCounter(counter + 1);
    }
  };
  let winner = checkWinner();

  const restartClickHandler = () => {
    setGameArray(Array(9).fill(null));
    winner = "";
    setIsX(true);
    setCounter(0);
  };

  return (
    <div className={mainContainer}>
      {winner?.length ? (
        <>
          {winner}
          <button className={styles.buttonClass} onClick={restartClickHandler}>
            Restart
          </button>
        </>
      ) : (
        <div className={flexClass}>
          {gameArray.map((val: string, index: number) => {
            return (
              <Square
                key={index + 1}
                onSquareClick={() => onClickHandler(index)}
                value={val}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TicTacToeGame;
