// @leet start
function romanToInt(s: string): number {
  const VALUES: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = VALUES[s[i]];
    const next = VALUES[s[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  return total;
}
// @leet end
