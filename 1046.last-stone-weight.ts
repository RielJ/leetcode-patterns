// @leet start
function lastStoneWeight(stones: number[]): number {
  const count = new Int32Array(Math.max(...stones));

  for (const stone of stones) {
    count[stone - 1] += 1;
  }

  let top = count.length - 1;

  while (top >= 0) {
    count[top] %= 2;
    if (count[top]) {
      const lastTop = top;
      while (--top >= 0) {
        if (count[top] === 0) continue;
        count[lastTop]--;
        count[top]--;
        count[lastTop - top - 1]++;

        if (lastTop - top - 1 > top) top = lastTop - top;
        break;
      }

      top++;
    }

    top--;
  }

  return count.findIndex((x) => x % 2 !== 0) + 1;
}
// @leet end
