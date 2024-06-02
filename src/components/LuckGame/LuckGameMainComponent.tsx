import React from "react";
import styled from "./LuckGame.module.css";
import { useState } from "react";
import RegisterContainer from "./RegisterContainer";
import LeaderBoardComponent from "./LeaderBoardComponent";

export type UserType = {
  id: number;
  userName: string;
  score: number;
  tokenNumber: number;
};

const LuckGameComponent = () => {
  const {
    gameContainer,
    game_child_container1,
    game_child_container2,
    commonClass,
  } = styled;
  const [users, setUsers] = useState<UserType[]>([]);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [tokenValue, setTokenValue] = useState<number>(-1);

  // callBack f
  const handleRegister = (userName: string) => {
    const unique = Date.now();
    const tokenSet = new Set(users.map((user) => user.tokenNumber)); // Get all existing token numbers

    // let tokenNumber = Math.floor(Math.random() * 10) + 1; // Generate a random token number between 1 and 10 initially
    let tokenNumber = Math.floor(Math.random() * 10) + 1;
    while (tokenSet.has(tokenNumber)) {
      tokenNumber = Math.floor(Math.random() * 10) + 1;
    }

    const newUser = {
      id: unique,
      userName,
      score: 0,
      tokenNumber: tokenNumber,
    };

    setUsers((users) => [...users, newUser]);
  };
  const startGameHandler = () => {
    if (users.length) {
      setStartGame(true);
    }
  };

  const addScore = (randomNumber: number) => {
    const newArray = users?.map((user) => {
      return user?.tokenNumber === randomNumber
        ? { ...user, score: user.score + 1 }
        : user;
    });
    setUsers(newArray);
  };

  const generateToken = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    setTokenValue(randomNumber);
    randomNumber !== -1 && addScore(randomNumber);
  };

  const stopGameHandler = () =>{
    const newArray = users?.map((user)=>{
      return {...user,score:0}
    })
    setStartGame(false)
    setUsers(newArray)
  }

  console.table(users);
  return (
    <div className={gameContainer}>
      <div className={`${game_child_container1} ${commonClass}`}>
        <LeaderBoardComponent users={users} />
        <RegisterContainer
          handleRegister={handleRegister}
          startGame={startGame}
        />
      </div>
      <div className={`${game_child_container2} ${commonClass}`}>
        {startGame && <LeaderBoardComponent users={users} withToken={true} />}
        <div className={styled.buttonContainer}>
          <button
            className={`${styled.buttonClass} ${styled.startGameButton}`}
            onClick={startGameHandler}
          >
            Start Game
          </button>
          {startGame && tokenValue !== -1 && (
            <button className={styled.tokenSpan}>{tokenValue}</button>
          )}
          <button style={{backgroundColor:'red'}} className={`${styled.buttonClass}`} onClick={stopGameHandler}>Stop</button>
          {startGame && (
            <button
              className={`${styled.buttonClass} ${styled.generateToken}`}
              onClick={generateToken}
            >
              Generate Token
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LuckGameComponent;
