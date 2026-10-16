// @leet start
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  let res = Array(n).fill(1);
  let mul = 1;

  for (let i = 0; i < n; i++) {
    res[i] = mul;
    mul *= nums[i];
  }

  mul = 1;
  for (let i = n - 1; i > -1; i--) {
    res[i] *= mul;
    mul *= nums[i];
  }

  return res;
}
// @leet end
