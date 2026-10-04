// @leet start
function exclusiveTime(n: number, logs: string[]): number[] {
  let arr: number[] = Array(n).fill(0);
  let stack: number[] = [];
  let cur = 0;

  if (logs.length === 0) return arr;

  for (const log of logs) {
    const [idStr, stat, timestampStr] = log.split(":");
    const id = Number.parseInt(idStr);
    const timestamp = Number.parseInt(timestampStr);
    if (stat === "start") {
      arr[stack[stack.length - 1]] += timestamp - cur;
      cur = timestamp;
      stack.push(id);
    } else {
      arr[id] += timestamp - cur + 1;
      cur = timestamp + 1;
      stack.pop();
    }
  }

  return arr;
}
// @leet end
