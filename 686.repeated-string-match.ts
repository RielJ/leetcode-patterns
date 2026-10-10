// @leet start
function repeatedStringMatch(a: string, b: string): number {
  const lps = new Int32Array(b.length);

  let len = 0;
  for (let i = 1; i < b.length; i++) {
    while (len > 0 && b[i] !== b[len]) len = lps[len - 1];
    if (b[i] === b[len]) len++;
    lps[i] = len;
  }

  let i = 0;
  let j = 0;
  while (i - j < a.length) {
    while (j > 0 && b[j] !== a[i % a.length]) j = lps[j - 1];
    if (a[i % a.length] === b[j]) j++;
    if (j === b.length) return Math.trunc(i / a.length) + 1;
    i++;
  }

  return -1;
}
// @leet end
