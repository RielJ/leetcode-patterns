// @leet start
function licenseKeyFormatting(s: string, k: number): string {
  let an = s.replaceAll("-", "").toUpperCase();
  let output = "";

  let stop = an.length % k || k;
  for (let i = 0; i < an.length; i++) {
    const char = an[i];
    if (i + 1 <= stop) {
      output += char;
    } else {
      output += `-${char}`;
      stop += k;
    }
  }

  return output;
}
// @leet end
