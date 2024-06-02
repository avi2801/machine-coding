

import React from "react";
import { UserType } from "./LuckGameMainComponent";
import styled from "./LuckGame.module.css";

interface LeaderBoardProps {
  users: UserType[];
  withToken?: boolean;
}

const renderCard = ({
  index,
  userName,
  score,
  withToken,
  token
}: {
  index: number;
  userName: string;
  score: number;
  withToken: boolean;
  token: number;
}) => {
  return (
    <>
      <span>{index + 1}</span>
      <span>{userName}</span>
      {withToken ? <span>{token}</span> : <span>{score}</span>}
    </>
  );
};

const LeaderBoardComponent = ({ users, withToken = false }: LeaderBoardProps) => {
  // Sort users by score and then by name if scores are the same
  const sortedUsers = [...users].sort((a, b) => {
    if (a.score === b.score) {
      return a.userName.localeCompare(b.userName);
    }
    return b.score - a.score;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: '5px' }}>
      {sortedUsers.map((user: UserType, index: number) => {
        return (
          <div className={styled.paraClass} key={`${user.id}-${index}`}>
            {renderCard({
              index,
              userName: user.userName,
              score: user.score,
              withToken,
              token: user.tokenNumber
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoardComponent;
