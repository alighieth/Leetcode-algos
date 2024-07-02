/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  function findMaxElement(row) {
    let maxIdx = 0;

    for (let index = 1; index < row.length; index++) {
      if (row[index] > row[maxIdx]) maxIdx = index;
    }

    return maxIdx;
  }

  const rows = mat.length;

  let l = 0;
  let r = rows - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const maxIdx = findMaxElement(mat[mid]);

    if (mat[mid][maxIdx] < mat[mid + 1][maxIdx]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return [l, findMaxElement(mat[l])];
};
