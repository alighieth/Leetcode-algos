function subarraySum(nums: number[], k: number): number {
  let sum = 0;
  let result = 0;

  const map = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    map.set(sum, (map.get(sum) ?? 0) + 1);

    sum += element;

    const diff = sum - k;
    result += map.get(diff) ?? 0;
  }

  return result;
}
