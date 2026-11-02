// @leet start
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let balance = 1;
  for (let i = 1; i < nums.length; i++) {
    if (balance === 0) {
      candidate = nums[i];
      balance = 1;
      continue;
    }
    if (candidate === nums[i]) balance++;
    else balance--;
  }

  return candidate;
}
// @leet end
