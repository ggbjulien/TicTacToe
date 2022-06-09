import { useState, useEffect } from "react";
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

  useEffect(() => {
    updatePlayerScore(winner);
    // eslint-disable-next-line
  }, [winner]);

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
    const flattenedBoard = board.flat();
    const draw = flattenedBoard.every((cell) => cell);

    if (draw) {
      updateWinner("draw");
      return true;
    } else {
      return false;
    }
  };

  const play = (row, col) => {
    if (winner) return;

    const updatedBoard = [...board];
    const cell = board[row][col];
    const cellIsEmpty = !cell;
    const playerOne = players.playerOne.symbol;
    const playerTwo = players.playerTwo.symbol;

    if (cellIsEmpty) {
      updatedBoard[row][col] = playerTurn;
      setBoard(updatedBoard);
      if (checkWinner(row, col)) {
        updateWinner(playerTurn);
      } else if (checkDraw()) {
        return;
      } else {
        playerTurn === "X"
          ? updatePlayerTurn(playerTwo)
          : updatePlayerTurn(playerOne);
      }
    } else {
      return;
    }
  };

  const playAgain = () => {
    const emptyBoard = [...Array(3)].map(() => Array(3).fill(null));
    const playerOne = players.playerOne.symbol;

    updateWinner(null);
    setBoard(emptyBoard);
    updatePlayerTurn(playerOne);
  };

  return (
    <div className={styles.Board}>
      {board.map((row, index) => (
        <Row key={index} onClick={play} row={row} rowIndex={index} />
      ))}
      {winner ? (
        <button className={styles.PlayAgain} onClick={(e) => playAgain(e)}>
          Play Again
        </button>
      ) : null}
    </div>
  );
};

export default Board;
