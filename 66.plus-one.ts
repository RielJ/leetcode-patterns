// @leet start
function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  let last = digits[i];

  if (last !== 9) {
    digits[i] = digits[i] + 1;
    return digits;
  }

  while (i >= 0 && last === 9) {
    digits[i--] = 0;
    last = digits[i];
  }

  if (i < 0 && digits[0] === 0) digits.unshift(1);
  else digits[i] = digits[i] + 1;

  return digits;
}
// @leet end
