// @leet start
function reverseWords(s: string): string {
  const chars = [...s];

  const reverse = (left: number, right: number) => {
    while (left < right) {
      const temp = chars[left];
      chars[left++] = chars[right];
      chars[right--] = temp;
    }
  };

  const n = chars.length;
  reverse(0, n - 1);

  for (let i = 0; i < n; i++) {
    if (chars[i] === " ") continue;

    const start = i;
    while (chars[i] !== " " && i < n) i++;
    reverse(start, i - 1);
  }

  let read = 0;
  let write = 0;
  while (read < n) {
    if (chars[read] === " ") {
      read++;
      continue;
    }
    while (read < n && chars[read] !== " ") chars[write++] = chars[read++];
    chars[write++] = " ";
  }

  return chars.slice(0, write - 1).join("");
}
// @leet end
