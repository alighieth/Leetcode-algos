// not good

const DP_MAP = new Map<string, string>();

function longestPalindrome(s: string): string {
  return helper(s, s);
}

function helper(str: string, palindrome: string): string {
  if (DP_MAP.has(str)) {
    console.log("found in cache ", str);
    return DP_MAP.get(str) ?? "";
  }
  if (isPalindrome(str)) {
    DP_MAP.set(str, str);
    return str;
  }

  const r_palindrome = helper(str.substring(0, str.length - 1), palindrome);
  const l_palindrome = helper(str.substring(1, str.length), palindrome);

  const result =
    r_palindrome.length > l_palindrome.length ? r_palindrome : l_palindrome;
  DP_MAP.set(str, result);
  return result;
}

function isPalindrome(word: string): boolean {
  if (!word) return false;

  const reversed_str = word.split("").reduce((acc, cur) => cur + acc);

  return reversed_str == word;
}
