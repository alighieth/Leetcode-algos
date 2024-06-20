function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let index = 0; index < prices.length; index++) {
    const iElement = prices[index];
    if (minPrice <= iElement && index !== 0) continue;

    minPrice = iElement;

    for (let jIndex = index + 1; jIndex < prices.length; jIndex++) {
      const jElement = prices[jIndex];

      maxProfit = Math.max(jElement - iElement, maxProfit);
    }
  }
  return maxProfit;
}
