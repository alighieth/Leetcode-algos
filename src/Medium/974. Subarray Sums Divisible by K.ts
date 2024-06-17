// function subarraysDivByK(nums: number[], k: number): number {
//   let returnVal = 0;

//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     console.log("element ", element);

//     const innerArr = new Array<number>();
//     innerArr.push(element);
//     for (let jIndex = index; jIndex < nums.length; jIndex++) {
//       if (innerArr.reduce((acc, cur) => cur + acc) % k === 0) returnVal += 1;
//       const element = nums[jIndex];

//       for (let index = 0; index < array.length; index++) {
//         const element = array[index];

//       }
//     }
//   }

//   return returnVal;
// }
