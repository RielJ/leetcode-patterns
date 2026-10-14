// @leet start
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (nums[right] === val && left <= right) nums[right--] = -1;
    if (nums[left] === val && left <= right) {
      nums[left] = nums[right];
      nums[right--] = -1;
    }
    left++;
  }

  return right + 1;
}
// @leet end
