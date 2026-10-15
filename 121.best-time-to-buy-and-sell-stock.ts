// @leet start
function maxProfit(prices: number[]): number {
  let best = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice) minPrice = price;
    else best = Math.max(price - minPrice, best);
  }

  return best;
}
// @leet end
