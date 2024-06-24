/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows < 2) return true;

  const direction = [1, 1];
  const callQueue = []; // [xPos, yPos]

  callQueue.push([0, 0]);
  for (let index = 1; index < cols - 1; index++) {
    callQueue.push([0, index]);
  }

  for (let index = 1; index < rows - 1; index++) {
    callQueue.push([index, 0]);
  }

  while (callQueue.length > 0) {
    const [xPos, yPos] = callQueue.shift();

    const newX = xPos + direction[0];
    const newY = yPos + direction[1];

    if (Math.min(newX, newY) < 0 || newX >= rows || newY >= cols) continue;

    const diagonalValue = matrix[newX][newY];

    if (diagonalValue !== matrix[xPos][yPos]) {
      return false;
    }
    callQueue.push([newX, newY]);
  }

  return true;
};
