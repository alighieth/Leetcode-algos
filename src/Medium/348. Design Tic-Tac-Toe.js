class TicTacToe {
  board;
  n;
  constructor(n) {
    this.board = [];
    for (let row = 0; row < n; row++) {
      this.board.push(new Array(n).fill(0));
    }
    this.n = n;
  }
  move(row, col, player) {
    this.board[row][col] = player;

    const rowFlag = this.checkRow(row, player);
    const colFlag = this.checkCol(col, player);
    const diagonalFlag = this.checkDiagonal(player);

    if (rowFlag || colFlag || diagonalFlag) return player;
    return 0;
  }

  checkRow(row, player) {
    const rowInfo = this.board[row];
    for (let index = 0; index < this.n; index++) {
      if (rowInfo[index] != player) return false;
    }
    return true;
  }

  checkCol(col, player) {
    for (let index = 0; index < this.n; index++) {
      if (this.board[index][col] != player) return false;
    }
    return true;
  }

  checkDiagonal(player) {
    const directions = [
      [0, 0],
      [this.n - 1, 0],
    ];

    const directionsMov = [
      [1, 1],
      [-1, 1],
    ];

    for (
      let directionsIndex = 0;
      directionsIndex < directions.length;
      directionsIndex++
    ) {
      let [startRow, startCol] = directions[directionsIndex];
      let [rowMov, colMov] = directionsMov[directionsIndex];

      let accept = true;
      for (let index = 0; index < this.n; index++) {
        if (this.board[startRow][startCol] != player) {
          accept = false;
          break;
        }

        startRow += rowMov;
        startCol += colMov;
      }

      if (accept) return true;
    }

    return false;
  }
}
