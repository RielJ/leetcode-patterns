// @leet start
function removeDuplicates(nums: number[]): number {
  const seen = new Set<number>();
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (!seen.has(nums[read])) {
      nums[write] = nums[read];
      write++;
      seen.add(nums[read]);
    }
  }
  return write;
}
// @leet end
