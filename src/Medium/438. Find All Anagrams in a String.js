/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return [];

  const freqP = new Array(26).fill(0);
  const freqS = new Array(26).fill(0);
  const res = [];

  const sSplit = s.split("");
  const pSplit = p.split("");

  // abc -> p
  // bac -> s
  for (let index = 0; index < pSplit.length; index++) {
    freqS[sSplit[index].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    freqP[pSplit[index].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  if (freqP.join("") === freqS.join("")) res.push(0);

  let l = 0;
  let r = p.length;

  // bacd
  while (r < s.length) {
    freqS[sSplit[l].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
    freqS[sSplit[r].charCodeAt(0) - "a".charCodeAt(0)] += 1;

    l++;
    r++;

    if (freqP.join("") === freqS.join("")) res.push(l);
  }

  return res;
};
