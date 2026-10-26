// @leet start
function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = Array(n).fill(1);
  let total = n;

  for (let i = 1; i < n; i++) {
    const cur = ratings[i];
    const prev = ratings[i - 1];

    if (cur > prev) {
      total = total - candies[i] + candies[i - 1] + 1;
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n; i >= 0; i--) {
    const cur = ratings[i];
    const prev = ratings[i + 1];

    if (cur > prev && candies[i] < candies[i + 1] + 1) {
      total = total - candies[i] + candies[i + 1] + 1;
      candies[i] = candies[i + 1] + 1;
    }
  }

  console.log(candies, total);

  return total;
}
// @leet end
