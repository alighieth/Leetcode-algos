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

  console.log(coveredIndex.size);
  return fullLength - coveredIndex.size;
};

// better solution O(nLogn)
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let overlap = 0;

  console.log(intervals);
  for (i = 1, prev = 0; i < intervals.length; i++)
    if (intervals[prev][1] >= intervals[i][1]) overlap++;
    else prev = i;
  return intervals.length - overlap;
};
