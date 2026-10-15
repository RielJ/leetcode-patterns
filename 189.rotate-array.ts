// @leet start
/**
 Do not return anything, modify nums in-place instead.
 */

function reverse(nums: number[], start: number, end: number): void {
  let left = start;
  let right = end - 1;
  while (left < right) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

function rotate(nums: number[], k: number): void {
  const idx = k % nums.length;
  reverse(nums, 0, nums.length);
  reverse(nums, 0, idx);
  reverse(nums, idx, nums.length);
}
// @leet end
