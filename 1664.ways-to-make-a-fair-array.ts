// @leet start
function waysToMakeFair(nums: number[]): number {
  let res = 0;

  const n = nums.length;
  let totalOdd = 0;
  let totalEven = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const isOdd = i % 2 === 1;
    if (isOdd) totalOdd += num;
    else totalEven += num;
  }

  let oddBefore = 0;
  let evenBefore = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const isOdd = i % 2 === 1;

    const newEvenSum = totalOdd - (isOdd ? num : 0) - oddBefore + evenBefore;
    const newOddSum = totalEven - (isOdd ? 0 : num) - evenBefore + oddBefore;

    if (newEvenSum === newOddSum) res++;

    if (isOdd) oddBefore += num;
    else evenBefore += num;
  }

  return res;
}
// @leet end
