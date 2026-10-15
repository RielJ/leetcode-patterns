// @leet start
function maxProfit(prices: number[]): number {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (price < minPrice) minPrice = price;
    if (price > minPrice) {
      profit += price - minPrice;
      minPrice = price;
    }
  }

  return profit;
}
// @leet end
