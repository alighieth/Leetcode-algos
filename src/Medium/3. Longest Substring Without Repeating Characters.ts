function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  const numTracker = new Set<string>();

  let maxCount = 1;
  let leftPointer = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);

    if (!numTracker.has(element)) {
      numTracker.add(element);
      continue;
    }

    maxCount = Math.max(maxCount, numTracker.size);
    while (numTracker.has(element)) {
      numTracker.delete(s.charAt(leftPointer));
      leftPointer++;
    }
    numTracker.add(element);
  }

  return Math.max(numTracker.size, maxCount);
}
