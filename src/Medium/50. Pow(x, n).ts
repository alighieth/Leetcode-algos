function myPow(x: number, n: number): number {
  if (n == 0) return 1;
  if (x === 0) return 0;

  const valueMap = new Map<number, number>();
  const numTracker = new Array<number>();

  let max = n;
  if (n < 0) {
    x = 1 / x;
    max = -1 * n;
  }
  let sum = 1;

  let counter = 0;

  while (max > 0) {
    const maxSummation = numTracker[numTracker.length - 1] ?? 1;
    if (max >= maxSummation) {
      sum *= valueMap.get(maxSummation) ?? x;
      max -= maxSummation;
      counter += maxSummation;
    } else {
      if (valueMap.has(max)) {
        sum *= valueMap.get(max);
        max -= max;
        counter += max;
      } else {
        sum *= x;
        max -= 1;
        counter += 1;
      }
    }

    console.log(max);
    console.log(valueMap);
    console.log(numTracker);

    numTracker.push(counter);
    valueMap.set(counter, sum);
  }

  return sum;
}
