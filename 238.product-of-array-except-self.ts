// @leet start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let left = new Int32Array(n);
  let right = new Int32Array(n);

  left[0] = 1;
  right[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = 0; i < n - 1; i++) {
    const idx = n - i - 1;
    right[idx - 1] = right[idx] * nums[idx];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
}
// @leet end
