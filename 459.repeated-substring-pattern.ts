// @leet start
function repeatedSubstringPattern(s: string): boolean {
  const lps = new Int32Array(s.length);

  let len = 0;
  for (let i = 1; i < s.length; i++) {
    while (len > 0 && s[i] !== s[len]) len = lps[len - 1];
    if (s[i] === s[len]) len++;
    lps[i] = len;
  }

  return (
    lps[s.length - 1] !== 0 &&
    lps[s.length - 1] % (s.length - lps[s.length - 1]) === 0
  );
}
// @leet end
