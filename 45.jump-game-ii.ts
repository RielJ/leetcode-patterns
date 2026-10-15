// @leet start
function jump(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return 0;
  let furthest = nums[0];
  let minJumps = 0;

  for (let i = 0; i < n && i <= furthest; i++) {
    if (furthest >= n - 1) return minJumps + 1;
    let j = furthest;
    const prev = furthest;
    while (j > i) {
      const num = nums[j];
      if (furthest < num + j) furthest = num + j;
      j--;
    }
    i = prev - 1;
    minJumps++;
  }
  if (furthest >= n - 1) return minJumps + 1;
  return minJumps;
}
// @leet end
