function search(nums: number[], target: number): number {
  let endPointer: number = nums.length - 1;
  let startPointer: number = 0;

  while (startPointer <= endPointer) {
    const median = Math.floor(startPointer + (endPointer - startPointer) / 2);
    console.log(median);

    const element = nums[median];
    if (element === target) return median;
    if (element > target) {
      endPointer = median - 1;
    } else {
      startPointer = median + 1;
    }
  }

  return -1;
}

search([-1, 0, 3, 5, 9, 12], 9);
