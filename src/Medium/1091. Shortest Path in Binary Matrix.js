/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  const visitedStated = new Set(); // xPos yPos
  const callQueue = []; // [x,y,length]
  visitedStated.add("00");
  callQueue.push([0, 0, 0]);

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  while (callQueue.length > 0) {
    const [xPos, yPos, length] = callQueue.shift();
    console.log(xPos, yPos, length);
    if (
      Math.min(xPos, yPos) < 0 ||
      xPos >= rows ||
      yPos >= cols ||
      grid[xPos][yPos]
    )
      continue;

    if (xPos === rows - 1 && yPos === cols - 1) {
      // the accept state
      return length;
    }

    for (let index = 0; index < directions.length; index++) {
      const [xMov, yMov] = directions[index];

      const newX = xPos + xMov;
      const newY = yPos + yMov;

      const stateName = String(newX) + String(newY);
      if (!visitedStated.has(stateName)) {
        visitedStated.add(stateName);
        callQueue.push([newX, newY, length + 1]);
      }
    }
  }

  return -1;
};
