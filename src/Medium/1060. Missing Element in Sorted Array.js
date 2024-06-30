/**
 * @param {number[]} input
 * @param {number} target
 * @return {number}
 */
var missingElement = function (input, target) {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    let middlePoint = left + Math.floor((right - left) / 2);
    const prevMissing = input[middlePoint] - input[0] - middlePoint;

    if (target > prevMissing) {
      left = middlePoint + 1;
    } else {
      right = middlePoint - 1;
    }
  }
  return input[0] + right + target;
};
