import { useState } from "react";
import Board from "../Board/Board";

import styles from "./Game.module.css";

const Game = () => {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [players, setPlayers] = useState({
    playerOne: { symbol: "X", score: 0 },
    playerTwo: { symbol: "O", score: 0 },
  });
  const [winner, setWinner] = useState(null);

  const updatePlayerTurn = (nextPlayer) => {
    setPlayerTurn(nextPlayer);
  };

  const updatePlayerScore = () => {
    if (winner === "X") {
      setPlayers({
        ...players,
        playerOne: { ...players.playerOne, score: players.playerOne.score + 1 },
      });
    } else if (winner === "O") {
      setPlayers({
        ...players,
        playerTwo: { ...players.playerTwo, score: players.playerTwo.score + 1 },
      });
    } else {
      return;
    }
  };

  const updateWinner = (winner) => {
    setWinner(winner);
  };

  return (
    <div className={styles.Game}>
      <Board
        playerTurn={playerTurn}
        players={players}
        updatePlayerTurn={updatePlayerTurn}
        updatePlayerScore={updatePlayerScore}
        updateWinner={updateWinner}
        winner={winner}
      />
    </div>
  );
};

export default Game;
