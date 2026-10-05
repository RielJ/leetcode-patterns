// @leet start
function largestRectangleArea(heights: number[]): number {
  let best = 0;
  const stack: number[] = [];

  // [2, 1, 2, 0]
  for (let i = 0; i <= heights.length; i++) {
    const height = heights[i] ?? 0;

    let minHeight = Infinity;
    while (stack.length && height < heights[stack.at(-1)!]) {
      minHeight = Math.min(heights[stack.pop()!], minHeight);
      const newTop = stack.at(-1) ?? -1;

      if (best < (i - newTop - 1) * minHeight) {
        best = (i - newTop - 1) * minHeight;
      }
    }

    stack.push(i);
  }

  return best;
}
// @leet end
