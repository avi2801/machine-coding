import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const Counter = () => {
  const [counter, setCounter] = useState<number>(1000);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const { mainCounterClass, counterButtons } = styles;

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning) {
      timerId = setTimeout(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000); // Decrease counter every 1 second (1000 milliseconds)
    }

    return () => {
      // Clear the timeout when component unmounts or when isRunning changes to false
      clearTimeout(timerId);
    };
  }, [counter, isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div className={mainCounterClass}>
      <h1>Create Counter in Backwards</h1>
      <button className={counterButtons} onClick={stopCounter}>
        Stop the counter
      </button>
      <button
        className={counterButtons}
        style={{ background: "green" }}
        onClick={startCounter}
        disabled={isRunning} // Disable start button if counter is already running
      >
        Start the counter
      </button>
      <h3>{counter}</h3>
    </div>
  );
};

export default Counter;
