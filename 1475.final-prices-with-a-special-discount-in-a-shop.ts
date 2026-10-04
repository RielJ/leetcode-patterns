// @leet start
function finalPrices(prices: number[]): number[] {
  if (prices.length === 0) return [];

  const stack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    while (stack.length !== 0 && prices[stack[stack.length - 1]] >= price) {
      const top = stack.pop()!;
      prices[top] -= price;
    }

    stack.push(i);
  }

  return prices;
}
// @leet end
