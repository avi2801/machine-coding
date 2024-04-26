import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(1000);
  useEffect(() => {
    setTimeout(()=>{
        setCounter(counter - 1);
    },2000)
    
  }, [counter]);

  const startCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Create Counter in Backwards</h1>
      <button
        style={{ width: "200px;", padding: "20px" }}
        onClick={startCounter}
      >
        Start the counter
      </button>
      <h3>{counter}</h3>
    </div>
  );
};

export default Counter;
