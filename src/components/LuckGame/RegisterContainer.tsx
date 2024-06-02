import React, { useState } from "react";
import styled from "./LuckGame.module.css";

const RegisterContainer = ({ handleRegister,startGame }: any) => {
  const [userName, setUserName] = useState<string>("");

  const handleNameChange = (e: any) => {
    setUserName(e.target.value);
  };
  const registerHandler = () => {
    if (userName.length) {
      
        handleRegister(userName);
        setUserName('')
    }
  };

  return (
    <div className={styled.registerMainClass}>
      <label className={styled.labelClass}>Enter your Name</label>
      <input
        className={styled.inputClass}
        type="text"
        onChange={handleNameChange}
        value={userName}
      />
      <button className={`${styled.buttonClass} ${startGame ?styled.disabledClass:''}`} onClick={registerHandler} disabled={startGame}>
        Add+
      </button>
    </div>
  );
};

export default RegisterContainer;
