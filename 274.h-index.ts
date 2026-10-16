// @leet start
function hIndex(citations: number[]): number {
  const sorted = citations.sort((a, b) => b - a);
  const n = sorted.length;
  let hIdx = 0;
  for (let i = 0; i < n; i++) {
    const citation = sorted[i];
    if (i + 1 <= citation) hIdx = Math.min(citation, i + 1);
    else return hIdx;
  }
  return hIdx;
}
// @leet end
