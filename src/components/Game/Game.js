import { useState } from "react";

import styles from "./Game.module.css";

const Game = () => {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [players, setPlayers] = useState({
    playerOne: { symbol: "X", score: 0 },
    playerTwo: { symbol: "O", score: 0 },
  });
  const [winner, setWinner] = useState(null);

  return <div className={styles.Game}>BOARD</div>;
};

export default Game;
