// @leet start
function reverseWords(s: string): string {
  let words = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") continue;
    let last = i;
    while (i >= 0 && s[i] !== " ") i--;
    words = words + (s.slice(i + 1, last + 1) + " ");
  }
  return words.slice(0, -1);
}
// @leet end
