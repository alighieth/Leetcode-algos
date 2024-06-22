function validPalindrome(s: string): boolean {
  let counter = 1;
  const stack: string[] = [];
  stack.push(s);

  while (stack.length > 0) {
    const str = stack.pop();
    console.log(stack);
    const isPalindromeFlag = isPalindrome(str ?? "");
    if (isPalindromeFlag === true) return true;
  }

  return false;
  function isPalindrome(str: string) {
    if (str.length <= 1) return true;

    let leftPointer = 0;
    let righPointer = str.length - 1;

    console.log(leftPointer, righPointer);

    while (leftPointer <= righPointer) {
      if (str.charAt(leftPointer) === str.charAt(righPointer)) {
        leftPointer++;
        righPointer--;
      } else {
        if (counter <= 0) return false;
        counter--;
        stack.push(
          str.substring(0, righPointer) +
            str.substring(righPointer + 1, str.length)
        );

        stack.push(
          str.substring(0, leftPointer) +
            str.substring(leftPointer + 1, str.length)
        );
        return false;
      }
    }

    return true;
  }
}
