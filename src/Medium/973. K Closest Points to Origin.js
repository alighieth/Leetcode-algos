/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  if (points.length === 1) return points[0];
  if (points.length === k) return points;

  function getEuclidean(p) {
    //√(x1 - x2)2 + (y1 - y2)2

    const x2 = Math.pow(p[0], 2);
    const y2 = Math.pow(p[1], 2);

    return Math.sqrt(x2 + y2);
  }

  const sortedPoints = points.sort(
    (p1, p2) => getEuclidean(p2) - getEuclidean(p1)
  );

  const res = [];
  while (k > 0) {
    res.push(sortedPoints[k]);
    k--;
  }
  return res;
};
