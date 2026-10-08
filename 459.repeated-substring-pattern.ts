// @leet start
function repeatedSubstringPattern(s: string): boolean {
  for (let i = 1; i <= s.length / 2; i++) {
    if (s.length % i !== 0) continue;

    const substr = s.substring(0, i);
    const replaced = s.replaceAll(substr, "");
    if (replaced === "") return true;
  }
  return false;
}
// @leet end
