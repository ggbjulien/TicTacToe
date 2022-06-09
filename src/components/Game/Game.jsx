import { useState } from "react";
import Board from "../Board/Board";
import Info from "../Info/Info";

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
    if (winner) {
      const updatedScores = { ...players };
      if (winner === "X") {
        updatedScores.playerOne.score += 1;
        setPlayers(updatedScores);
      } else if (winner === "O") {
        updatedScores.playerTwo.score += 1;
        setPlayers(updatedScores);
      } else {
        return;
      }
    }
  };

  const updateWinner = (winner) => {
    setWinner(winner);
  };

  return (
    <div className={styles.Game}>
      <Info playerTurn={playerTurn} players={players} winner={winner} />
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
