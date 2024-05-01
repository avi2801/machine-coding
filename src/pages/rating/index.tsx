import React, { useState } from "react";
import styles from "./styles.module.css";

const RatingIndex = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(0);

  const starClickHandler = (index: number) => {
    setCurrentActiveIndex(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rating = parseInt(e.target.value, 10);
    if(rating>5){
        setCurrentActiveIndex(0)
        alert('You are not allowed to give rating above 5')
        
    }
    if (rating === 0) {
      setCurrentActiveIndex(0);
    } else {
      setCurrentActiveIndex(rating - 1);
    }
  };

  const starElement = Array(5)
    .fill(5)
    ?.map((star, index) => {
      return (
        <span
          key={index}
          className={
            currentActiveIndex >= index
              ? styles.activeClass
              : styles.nonActiveClass
          }
          style={{ cursor: "pointer", fontSize:'2rem' }}
          onClick={() => starClickHandler(index)}
        >
          &#9733;
        </span>
      );
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}> Star Rating</p>
      <div>{starElement}</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>Enter the Rating</p>
        <input
          placeholder="Give Rating"
          style={{ padding: "12px 16px", borderRadius: "6px", width: "220px" }}
          onChange={handleInputChange}
         value={currentActiveIndex+1|| 0}
          
        />
      </div>
    </div>
  );
};

export default RatingIndex;
