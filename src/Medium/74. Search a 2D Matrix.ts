function searchMatrix(matrix: number[][], target: number): boolean {
  let endPointer: number = matrix.length - 1;
  let startPointer: number = 0;

  while (startPointer <= endPointer) {
    const median = Math.floor(startPointer + (endPointer - startPointer) / 2);
    console.log(median);

    const elementArray = matrix[median];
    const elementMidArr = elementArray[0];

    if (elementMidArr === target) return true;

    if (elementMidArr < target) {
      if (median === matrix.length - 1) {
        return searchHelper(elementArray, target);
      }
      const rightMin = matrix[median + 1][0];
      if (rightMin > target) {
        return searchHelper(elementArray, target);
      } else {
        startPointer = median + 1;
      }
    } else {
      endPointer = median - 1;
    }
  }

  return false;
}

function searchHelper(nums: number[], target: number): boolean {
  let endPointer: number = nums.length - 1;
  let startPointer: number = 0;

  while (startPointer <= endPointer) {
    const median = Math.floor(startPointer + (endPointer - startPointer) / 2);
    console.log(median);

    const element = nums[median];
    if (element === target) return true;
    if (element > target) {
      endPointer = median - 1;
    } else {
      startPointer = median + 1;
    }
  }

  return false;
}
