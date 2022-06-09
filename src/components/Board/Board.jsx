import { useState } from "react";
import {
  checkRow,
  checkColumn,
  checkDiagonal,
} from "../../helpers/checkWinner";
import Row from "../Row/Row";

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

  const play = (row, col) => {
    if (winner) return;

    const updatedBoard = [...board];

    if (!board[row][col]) {
      updatedBoard[row][col] = playerTurn;
      setBoard(updatedBoard);
      if (checkWinner(row, col)) {
        updateWinner(playerTurn);
        updatePlayerScore(winner);
      } else if (checkDraw()) {
        return;
      } else {
        playerTurn === "X"
          ? updatePlayerTurn(players.playerTwo.symbol)
          : updatePlayerTurn(players.playerOne.symbol);
      }
    } else {
      return;
    }
  };

  return (
    <div className={styles.Board}>
      {board.map((row, index) => (
        <Row key={index} onClick={play} row={row} rowIndex={index} />
      ))}
    </div>
  );
};

export default Board;
