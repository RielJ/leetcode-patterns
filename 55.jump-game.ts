// @leet start
function canJump(nums: number[]): boolean {
  const n = nums.length;
  let furthest = nums[0];

  for (let i = 0; i < n && i <= furthest; i++) {
    const num = nums[i];
    if (furthest < num + i) furthest = num + i;
    if (furthest >= n - 1) return true;
  }
  return false;
}
// @leet end
