function longestPalindrome(str: string): string {
  function expand(l_pointer: number, r_pointer: number): string {
    while (
      l_pointer >= 0 &&
      r_pointer < str.length &&
      str.charAt(l_pointer) === str.charAt(r_pointer)
    ) {
      l_pointer--;
      r_pointer++;
    }

    return String(str).substring(l_pointer + 1, r_pointer);
  }

  let result = "";
  for (let index = 0; index < str.length; index++) {
    const even_str = expand(index, index);
    if (even_str.length > result.length) result = even_str;

    const odd_str = expand(index, index + 1);
    if (odd_str.length > result.length) result = odd_str;
  }

  return result;
}
