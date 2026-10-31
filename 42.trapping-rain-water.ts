// @leet start
function trap(height: number[]): number {
  const n = height.length;
  const maxL = new Int32Array(n);
  const maxR = new Int32Array(n);
  let res = 0;

  maxL[0] = height[0];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
  }

  maxR[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(maxR[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    res += Math.min(maxL[i], maxR[i]) - height[i];
  }

  return res;
}
// @leet end
