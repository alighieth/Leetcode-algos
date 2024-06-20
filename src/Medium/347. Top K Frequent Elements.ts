function topKFrequent(words: string[], k: number): string[] {
  const mappedIterations = new Map<string, number>();

  let leftPointer = 0;
  let rightPointer = words.length - 1;

  while (leftPointer <= rightPointer) {
    const iElement = words[leftPointer];
    const jElement = words[rightPointer];

    mappedIterations.set(iElement, (mappedIterations.get(iElement) ?? 0) + 1);
    if (leftPointer != rightPointer) {
      mappedIterations.set(jElement, (mappedIterations.get(jElement) ?? 0) + 1);
    }

    leftPointer++;
    rightPointer--;
  }

  const arr = new Array<Array<string> | null>(words.length).fill(null);
  const result = new Array<string>();

  mappedIterations.forEach((value, key) => {
    const prevValue = arr[value] ?? [];
    prevValue.push(key);
    arr[value] = prevValue;
  });

  for (let index = arr.length - 1; index >= 0 && k > 0; index--) {
    const element = arr[index];

    if (!element) continue;
    while (k > 0 && element.length > 0) {
      result.push(element.pop());
      k--;
    }
  }

  return result;
}
