// function maxArea(height: number[]): number {
//   if (height.length <= 1) return 0;

//   let maxVolume = 0;

//   for (let index = 0; index < height.length - 1; index++) {
//     const iElement = height[index];

//     for (let jIndex = index + 1; jIndex < height.length; jIndex++) {
//       const jElement = height[jIndex];

//       const volume = Math.min(iElement, jElement) * (jIndex - index);
//       console.log(index, jIndex, volume);
//       maxVolume = Math.max(maxVolume, volume);
//     }
//   }

//   return maxVolume;
// }

// Enhanced linear solution
function maxArea(height: number[]): number {
  if (height.length <= 1) return 0;

  let maxVolume = 0;

  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const iElement = height[leftPointer];
    const jElement = height[rightPointer];

    const volume = Math.min(iElement, jElement) * (rightPointer - leftPointer);
    maxVolume = Math.max(maxVolume, volume);

    if (iElement < jElement) {
      leftPointer++;
    } else {
      rightPointer++;
    }
  }

  return maxVolume;
}
