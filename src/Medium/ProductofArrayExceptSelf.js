var productExceptSelf = function (nums) {
  let returnValue = [];
  let productValue = nums.reduce((a, b) => a * b);
  const includesZero = nums.includes(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      let elseProductValue = nums.reduce((prev, curr, index) => {
        if (index == i) return prev;
        if (i == 0 && index == 1) return curr;
        return prev * curr;
      });
      returnValue.push(elseProductValue);
    } else if (includesZero) {
      returnValue.push(0);
    } else {
      returnValue.push(productValue / nums[i]);
    }
  }

  return returnValue;
};
