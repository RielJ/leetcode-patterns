// @leet start
function detectCapitalUse(word: string): boolean {
  let seenLower = false;
  let seenUpper = false;
  for (let i = 0; i < word.length; i++) {
    const isLower = word.charCodeAt(i) < 97;
    if (i === 0 && isLower) continue;
    if (isLower) seenLower = true;
    else seenUpper = true;

    if (seenUpper && seenLower) return false;
  }

  return true;
}
// @leet end
