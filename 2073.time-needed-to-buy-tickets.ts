// @leet start
function timeRequiredToBuy(tickets: number[], k: number): number {
  let ans = 0;

  let target = tickets[k];
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];

    if (i <= k) ans += Math.min(target, ticket);
    else ans += Math.min(target - 1, ticket);
  }

  return ans;
}
// @leet end
