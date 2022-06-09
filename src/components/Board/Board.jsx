import { useState } from "react";

import styles from "./Board.module.css";

const Board = ({
  updatePlayerTurn,
  players,
  playerTurn,
  updatePlayerScore,
  updateWinner,
  winner,
}) => {
  const [board, setBoard] = useState(
    [...Array(3)].map(() => Array(3).fill(null))
  );

  return <div className={styles.Board}>ROW</div>;
};

export default Board;
