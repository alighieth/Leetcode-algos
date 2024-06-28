/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const sSplit = s.split("");
  const nearestRightPlate = new Array(sSplit.length).fill(-1);
  const nearestLeftPlate = new Array(sSplit.length).fill(-1);
  const platesCounter = new Array(sSplit.length).fill(0);

  // compute nearest right
  let rightMostCandle = -1;
  for (let index = 0; index < sSplit.length; index++) {
    const element = sSplit[index];

    if (element === "|") {
      nearestRightPlate[index] = index;
      rightMostCandle = index;
    } else {
      nearestRightPlate[index] = rightMostCandle;
    }
  }

  // compute nearest left
  let leftMostCandle = -1;
  for (let index = sSplit.length - 1; index >= 0; index--) {
    const element = sSplit[index];

    if (element === "|") {
      nearestLeftPlate[index] = index;
      leftMostCandle = index;
    } else {
      nearestLeftPlate[index] = leftMostCandle;
    }
  }
  // compute values
  let value = 0;
  for (let index = 0; index < sSplit.length; index++) {
    const element = sSplit[index];
    if (element === "*") value++;

    platesCounter[index] = value;
  }

  console.log(nearestRightPlate);
  console.log(nearestLeftPlate);
  console.log(platesCounter);

  const res = [];
  for (let index = 0; index < queries.length; index++) {
    const [start, end] = queries[index];

    const nextPlate = nearestRightPlate[start];
    const prevPlate = nearestLeftPlate[end];

    const total = platesCounter[prevPlate] - platesCounter[nextPlate];
    res.push(total);
  }

  return res;
};
