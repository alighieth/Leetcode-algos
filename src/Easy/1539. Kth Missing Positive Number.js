// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number}
//  */
// var findKthPositive = function (arr, k) {
//   const maxVal = arr[arr.length - 1];

//   const numTracker = new Set();
//   arr.forEach((num) => numTracker.add(num));

//   const res = [];
//   for (let index = 1; index <= maxVal + k; index++) {
//     if (numTracker.has(index)) continue;
//     res.push(index);
//   }

//   return res[k - 1];
// };

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const numTracker = new Set();
  arr.forEach((num) => numTracker.add(num));

  const res = [];

  let num = 1;
  while (res.length < k) {
    if (!numTracker.has(num)) res.push(num);
    num++;
  }

  return res.pop();
};
