/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if (wordDict.length == 0) return false;
  const n = n;

  // create a set to have O(1) getting
  const wordSet = new Set();
  wordDict.forEach((word) => wordSet.add(word));
  // create a dp array to keep track of words existing
  const dp = new Array(n + 1).fill(false);

  // set first element as true, it is the empty string
  dp[0] = true;

  for (let to = 1; to <= n; to++) {
    for (let from = 0; from < to; from++) {
      const word = s.substring(from, to);

      if (wordSet.has(word) && dp[j] === true) {
        dp[to] = true;
        break;
      }
    }
  }

  return dp[n];
};
