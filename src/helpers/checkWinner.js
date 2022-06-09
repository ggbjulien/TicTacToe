export const checkRow = (board, row) => {
  let selectedRow = board[row][0];
  let winStreak = false;
  for (let i = 0; i < board[row].length; i++) {
    if (selectedRow && selectedRow === board[row][i]) {
      selectedRow = board[row][i];
      winStreak = true;
    } else {
      return false;
    }
  }
  return winStreak;
};

export const checkColumn = (board, col) => {
  let selectedColumn = board[0][col];
  let winStreak = false;
  for (let i = 0; i < board.length; i++) {
    if (selectedColumn && selectedColumn === board[i][col]) {
      selectedColumn = board[i][col];
      winStreak = true;
    } else {
      return false;
    }
  }
  return winStreak;
};

export const checkDiagonal = (board) => {
  if (
    board[1][1] &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return true;
  }
  if (
    board[1][1] &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return true;
  }
  return false;
};
