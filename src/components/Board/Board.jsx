import { useState } from "react";
import {
  checkRow,
  checkColumn,
  checkDiagonal,
} from "../../helpers/checkWinner";

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

  const checkWinner = (row, col) => {
    if (
      checkRow(board, row) ||
      checkColumn(board, col) ||
      checkDiagonal(board)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkDraw = () => {
    if (board.flat().every((cell) => cell)) {
      updateWinner("draw");
      return true;
    } else {
      return false;
    }
  };

  return <div className={styles.Board}>ROW</div>;
};

export default Board;
