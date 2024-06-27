/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  if (heights.length === 1) return [0];

  const resArr = [heights.length].fill(null);

  let prefixMax = 0; // ground
  for (let index = heights.length - 1; index >= 0; index--) {
    const buildingHeight = heights[index];

    if (buildingHeight > prefixMax) r;
    prefixMax = Math.max(prefixMax, buildingHeight);
  }

  return resArr.filter((element) => element !== null);
};
