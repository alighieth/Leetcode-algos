/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) return [];
  const res = [];

  let l = 0;
  let r = 0;

  while (l < firstList.length && r < secondList.length) {
    const [start1, end1] = firstList[l];
    const [start2, end2] = secondList[r];

    // check if there is an intersection
    if (
      (end1 >= start2 && end1 <= end2) ||
      (start1 >= start2 && start1 <= end2) ||
      (start2 >= start1 && end2 <= end1)
    ) {
      res.push([Math.max(start1, start2), Math.min(end1, end2)]);
    }

    if (end1 < end2) l++;
    else r++;
  }

  return res;
};
