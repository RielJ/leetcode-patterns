// @leet start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const need = map.get(target - num);
    if (need !== undefined) return [need, i];
    map.set(num, i);
  }

  return [0, 0]; // unreachable
}
// @leet end
