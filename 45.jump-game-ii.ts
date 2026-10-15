// @leet start
function jump(nums: number[]): number {
  const n = nums.length;
  let furthest = 0;
  let end = 0;
  let jumps = 0;

  for (let i = 0; i < n - 1 && i <= furthest; i++) {
    const reach = nums[i] + i;
    if (furthest < reach) {
      furthest = reach;
    }
    if (end === i) {
      jumps++;
      end = furthest;
    }
  }

  return jumps;
}
// @leet end
