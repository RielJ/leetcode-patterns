// @leet start
function longestCommonPrefix(strs: string[]): string {
  let prefix = -1;

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every((a) => a[i] === strs[0][i])) prefix++;
    else break;
  }

  if (prefix === -1) return "";

  return strs[0].slice(0, prefix + 1);
}
// @leet end
