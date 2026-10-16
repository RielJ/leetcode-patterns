// @leet start
function hIndex(citations: number[]): number {
  const n = citations.length;
  const buckets = new Int32Array(n + 1);

  for (const citation of citations) {
    if (citation > n) buckets[n]++;
    else buckets[citation - 1]++;
  }

  let hIdx = 0;
  for (let i = n; i >= 0; i--) {
    hIdx += buckets[i];
    if (hIdx > i) return i + 1;
  }

  return hIdx;
}
// @leet end
