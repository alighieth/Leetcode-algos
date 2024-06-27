/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  let fullLength = intervals.length;

  const coveredIndex = new Set();
  for (let index = 0; index < intervals.length; index++) {
    const [a, b] = intervals[index];

    for (let jIndex = 1 + index; jIndex < intervals.length; jIndex++) {
      const [c, d] = intervals[jIndex];

      if (c <= a && b <= d) {
        coveredIndex.add(index);
        break;
      } else if (a <= c && d <= b) {
        coveredIndex.add(jIndex);
      }
    }
  }

  console.log(coveredIndex);
  return fullLength - coveredIndex.length;
};
