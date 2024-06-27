/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let lastIndex = nums1.length - 1;

  m--;
  n--;

  while (lastIndex >= 0 && n >= 0) {
    const element1 = nums1[m];
    const element2 = nums2[n];

    if (element1 > element2) {
      nums1[lastIndex] = element1;
      m--;
    } else {
      nums1[lastIndex] = element2;
      n--;
    }

    lastIndex--;
  }

  return nums1;
};
