// @leet start
function minSubarray(nums: number[], p: number): number {
  // [3,1,4,2], total = 10
  // p = 6, r = 4
  // prefix sum = [3, 4, 8, 10]
  // prefix remainders = [3, 4, 2, 4]

  const total = nums.reduce((cur, acc) => {
    return acc + cur;
  }, 0);
  let r = total % p;
  if (r === 0) return 0;

  const seen = new Map<number, number>();
  seen.set(0, -1);

  let cur = 0;
  let best = nums.length;
  for (let i = 0; i < nums.length; i++) {
    cur = (nums[i] + cur) % p;
    const need = (cur - r + p) % p;
    const idx = seen.get(need);
    if (idx !== undefined) best = Math.min(i - idx, best);

    seen.set(cur, i);
  }

  return best === nums.length ? -1 : best;
}
// @leet end
