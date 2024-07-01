/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memory = new Array(m).fill(0).map(() => new Array(n));

  function dfs(row, col) {
    if (row >= m || col >= n) return 0;
    if (row == m - 1 && col == n - 1) return 1;

    // moving down
    if (memory[row][col]) return memory[row][col];
    return (memory[row][col] = dfs(row + 1, col) + dfs(row, col + 1));
  }

  return dfs(0, 0);
};
