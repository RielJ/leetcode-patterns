// @leet start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length;
  let total = 0;
  let runningTotal = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const g = gas[i];
    const c = cost[i];

    total += g - c;
    runningTotal += g - c;

    if (runningTotal < 0) {
      runningTotal = 0;
      start = i + 1;
    }
  }

  if (total < 0) return -1;

  return start;
}
// @leet end
