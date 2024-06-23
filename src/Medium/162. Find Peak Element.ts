// function findPeakElement(nums: number[]): number {
//   let index = 0;

//   while (index < nums.length) {
//     const midElement = nums[index];
//     const prevElement = index - 1 >= 0 ? nums[index - 1] : -Infinity;
//     const nextElement = index + 1 < nums.length ? nums[index + 1] : -Infinity;

//     console.log(prevElement, midElement, nextElement);

//     if (midElement >= prevElement && midElement >= nextElement) {
//       return index;
//     } else {
//       if (nextElement < midElement) {
//         index++;
//       }
//       index++;
//     }
//   }
//   return index;
// } // this is O(n)

function findPeakElement(nums: number[]): number {
  function helper(nums: number[], start: number, end: number) {
    const mid = Math.floor(end - start / 2);
    const midElement = nums[mid];
    const prevElement = mid - 1 >= 0 ? nums[mid - 1] : -Infinity;
    const nextElement = mid + 1 < nums.length ? nums[mid + 1] : -Infinity;

    if (midElement >= prevElement && midElement >= nextElement) {
      return mid;
    }

    if (nextElement >= midElement) {
      return helper(nums, mid + 1, end);
    } else {
      return helper(nums, start, mid - 1);
    }
  }

  return helper(nums, 0, nums.length);
}
