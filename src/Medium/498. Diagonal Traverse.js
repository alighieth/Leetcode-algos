/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const printArr = [];
  let x = 0;
  let y = 0;

  let counter = 0;
  let goingUp = true;

  const rowSize = mat.length;
  const colSize = mat[0].length;

  while (printArr.length < rowSize * colSize) {
    if (goingUp) {
      while (x >= 0 && y < colSize) {
        printArr.push(mat[x][y]);
        x--;
        y++;
      }

      if (y >= colSize) {
        x -= 2;
        y--;
      } else {
        x--;
      }
      goingUp = false;
    } else {
      while (x < rowSize && y >= 0) {
        printArr.push(mat[x][y]);
        x++;
        y--;
      }

      if (y < 0) {
        y += 2;
        x--;
      } else {
        x++;
        y--;
      }
    }
    goingUp = true;
  }

  return printArr;
};
