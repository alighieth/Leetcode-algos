function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  const sortedNums = nums.sort((a, b) => a - b);

  let maxCounter = 0;
  let counter = 1;
  for (let index = 1; index < sortedNums.length; index++) {
    const element = sortedNums[index];
    const prevElemnt = sortedNums[index - 1];

    if (element - prevElemnt === 1) {
      counter++;
    } else if (element - prevElemnt > 1) {
      maxCounter = Math.max(maxCounter, counter);
      counter = 1;
    }
  }

  maxCounter = Math.max(maxCounter, counter);
  return maxCounter;
}
