import React, { useState, useEffect } from "react";
import styled from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progressBarWidth < 100) {
        setProgressBarWidth((p) => p + 10);
      }
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [progressBarWidth]);

  const resetClick = () => {
    setProgressBarWidth(0);
  };

  return (
    <div className={styled.mainClass}>
      <div className={styled.progressClass}>
        <div
          className={styled.progressBar}
          style={{ width: `${progressBarWidth}%` }}
        />
      </div>
      <button className={styled.buttonClass} onClick={resetClick}>
        Reset
      </button>
    </div>
  );
};

export default ProgressBar;
