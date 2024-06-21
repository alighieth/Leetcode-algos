function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const maxMedian = Math.floor(totalLength / 2);

  let left1Pointer = 0;
  let left2Pointer = 0;

  let newNumArr = new Array<number>();
  while (left1Pointer + left2Pointer <= maxMedian) {
    const element1 = left1Pointer < nums1.length ? nums1[left1Pointer] : null;
    const element2 = left2Pointer < nums2.length ? nums2[left2Pointer] : null;

    let toAdd: number;
    if (element1 !== null && (element2 == null || element1 <= element2)) {
      left1Pointer++;
      toAdd = element1;
    } else {
      toAdd = element2;
      left2Pointer++;
    }

    newNumArr.push(toAdd);
  }

  const finalElement = newNumArr[newNumArr.length - 1];
  if (totalLength % 2 === 0) {
    const prevElement = newNumArr[newNumArr.length - 2];
    return (prevElement + finalElement) / 2;
  }

  return finalElement;
}
