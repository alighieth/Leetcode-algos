/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const all = [];

  for (let i of intervals) {
    all.push([i[0], 0]); // START - 0
    all.push([i[1], 1]); // END - 1
  }

  // sort by start times, if same then whichever ends last
  all.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let max = 0;
  let temp = 0;

  for (const [_, state] of all) {
    if (state === 0) {
      temp++;
    } else {
      temp--;
    }

    max = Math.max(max, temp);
  }

  return max;
};
