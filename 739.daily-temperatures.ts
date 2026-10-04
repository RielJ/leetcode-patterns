// @leet start
function dailyTemperatures(temperatures: number[]): number[] {
  let ans = Array(temperatures.length).fill(0);
  let unchecked: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      unchecked.length &&
      temperatures[i] > temperatures[unchecked.at(-1)!]
    ) {
      ans[unchecked.at(-1)!] = i - unchecked.at(-1)!;
      unchecked.pop();
    }

    unchecked.push(i);
  }

  return ans;
}
// @leet end
