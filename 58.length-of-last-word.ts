// @leet start
function lengthOfLastWord(s: string): number {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") continue;
    else {
      while (s[i] !== " " && i >= 0) {
        count++;
        i--;
      }
      return count;
    }
  }
  return 0;
}
// @leet end
