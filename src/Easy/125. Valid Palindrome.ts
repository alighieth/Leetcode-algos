function isPalindrome(s: string): boolean {
  if (s.length === 0) return true;
  // follow a 2 pointer approach

  // remove all spaces
  let stringWithoutSpaces = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let rPointer = 0;
  let lPointer = stringWithoutSpaces.length - 1;

  while (rPointer < lPointer) {
    if (
      stringWithoutSpaces.charAt(rPointer) !==
      stringWithoutSpaces.charAt(lPointer)
    )
      return false;

    rPointer++;
    lPointer--;
  }

  return true;
}
