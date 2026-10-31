// @leet start
function candy(ratings: number[]): number {
  const n = ratings.length;
  let up = 0;
  let down = 0;
  let peak = 0;

  let total = 1;
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      up++;
      total += up + 1;
      peak = up;
      down = 0;
    } else if (ratings[i] === ratings[i - 1]) {
      up = 0;
      down = 0;
      peak = 0;
      total++;
    } else {
      down++;
      total += down;
      if (peak < down) total++;
      up = 0;
    }
  }

  return total;
}
// @leet end
